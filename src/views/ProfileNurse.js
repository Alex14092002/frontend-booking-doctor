import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function ProfilePatient() {

  const { id } = useParams();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    role: "",
  });


  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/user/${id}`);
      const dataAPI = await res.json();

      setData(dataAPI);
    };

    getData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState, // Create a copy of the existing state
      [name]: value, // Update the specific property
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the updated data to the backend
    try {
      const response = await fetch(`http://localhost:8000/api/user/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert("Cập nhật thông tin thành công!");
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Sửa thông tin tài khoản</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Tên tài khoản</label>
                        <Input
                          name="username"
                          value={data.username}
                          onChange={handleInputChange}
                          placeholder="tên tài khoản"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Input
                          name="email"
                          value={data.email}
                          onChange={handleInputChange}
                          placeholder="mike@email.com"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Số điện thoại</label>
                        <Input
                          name="phone"
                          value={data.phone}
                          onChange={handleInputChange}
                          placeholder="Số điện thoại"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Vai trò</label>
                        <select
                          name="role"
                          value={data.role}
                          onChange={handleInputChange}
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option value="nurse">Y tá</option>
                          <option value="doctor">Bác sĩ</option>
                          <option value="user">Bệnh nhân</option>
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProfilePatient;
