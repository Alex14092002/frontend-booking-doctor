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
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/user/${id}`);
      const dataAPI = await res.json();

      setData(dataAPI);
    };

    getData();
  }, []);

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
                <Form>
                  <Row>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Tên tài khoản</label>
                        <Input
                          defaultValue={data.username} // Set the default value to the username from the API data
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
                          defaultValue={data.email} // Set the default value to the email from the API data
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
                          defaultValue={data.phone} // Set the default value to the phone number from the API data
                          placeholder="Số điện thoại"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Vai trò</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={data.role} // Set the selected value to the role from the API data
                        >
                          <option value="nurse">Y tá</option>
                          <option value="doctor">Bác sĩ</option>
                          <option value="user">Bệnh nhân</option>
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProfilePatient;
