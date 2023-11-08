
import React from "react";

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
  const param = new URLSearchParams(window.location.search)
  const id = param.get('id')
  console.log(param.get);
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
                          defaultValue="michael23"
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
                        <Input placeholder="mike@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                 
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Số điện thoại</label>
                        <Input
                          defaultValue="Andrew"
                          placeholder="Số điện thoại"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Vai trò</label>
                        <select class="form-select" aria-label="Default select example">

  <option value="1">Y tá</option>
  <option value="2">Bác sĩ</option>

  <option value="3">Bệnh nhân</option>

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
