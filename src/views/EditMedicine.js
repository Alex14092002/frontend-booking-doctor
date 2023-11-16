import { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";

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

function Editmedicine() {
  const { id } = useParams();

  const [successMessage, setSuccessMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [serverImage, setServerImage] = useState(""); // Ảnh từ server
  const [selectedImage, setSelectedImage] = useState(""); // Ảnh từ input file

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:8000/api/medicine/update/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        setSuccessMessage("Sửa thuốc thành công!");
      } else {
        console.error("Lỗi khi sửa thuốc:", response.statusText);
      }
    } catch (error) {
      console.error("Lỗi khi sửa thuốc:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:8000/api/medicine/detail/${id}`
      );
      const dataAPI = await res.json();
      setData(dataAPI);
      setServerImage(`http://localhost:8000/` + dataAPI.image);
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This navigates back one step in the history
  };



  return (
    <>
      <button className="btn btn-darker" onClick={goBack}>
      Quay lại
    </button>

      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Thêm thông tin thuốc</h5>
              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <Row>
                    <Col className="px-md-1" md="3">
                      <label>Tên thuốc</label>
                      <input
                        name="name"
                        value={data.name}
                        placeholder="tên thuốc"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <label htmlFor="exampleInputEmail1">Giá</label>
                      <input
                        name="price"
                        value={data.price}
                        onChange={handleInputChange}
                        placeholder="Giá thuốc"
                        type="number"
                      />
                    </Col>

                    <Col className="pl-md-1" md="4">
  <label htmlFor="exampleInputEmail1">Ảnh thuốc</label>
  <input
    name="image"
    placeholder="Nhập file"
    type="file"
    onChange={(e) => {
      handleInputChange(e);
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }}
  />
  {(selectedImage || serverImage) && (
    <img
      src={selectedImage || serverImage}
      width="100px"
      alt="Medicine Preview"
    />
  )}
  {!selectedImage && !data.image && (
    <img
      src={`http://localhost:8000/` + data.image}
      width="100px"
      alt="Medicine Preview"
    />
  )}
</Col>

                  </Row>

                  <button
                    className="btn btn-primary"
                    color="primary"
                    type="submit"
                  >
                    Save
                  </button>
                </form>
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Editmedicine;
