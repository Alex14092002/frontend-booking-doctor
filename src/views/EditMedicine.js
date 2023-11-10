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

function Editmedicine() {
  const { id } = useParams();

  const [successMessage, setSuccessMessage] = useState('');
  const [data, setData] = useState({
    name: "",
    price: "",
    image: "",
  });


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:8000/api/medicine/add', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage('Thêm thuốc thành công!');
      } else {
        console.error('Lỗi khi thêm thuốc:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi khi thêm thuốc:', error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/medicine/detail/${id}`);
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
                        />
                 
                    </Col>
                    <Col className="pl-md-1" md="4">
                     
                        <label htmlFor="exampleInputEmail1">
                          Giá
                        </label>
                        <input
                          name="price"
                          value={data.price}
                          placeholder="Giá thuốc"
                          type="number"
                        />
                     
                    </Col>

                    <Col className="pl-md-1" md="4">
                     
                        <label htmlFor="exampleInputEmail1">
                          Ảnh thuốc
                        </label>
                        <input
                    
                          value={data.image}
                          name="image"
                          placeholder="Nhập file"
                          type="file"
                        />
                    
                    </Col>
                  </Row>
                
                  <button className="btn btn-primary" color="primary" type="submit">
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
