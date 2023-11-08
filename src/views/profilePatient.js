
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

function editTour() {
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
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Họ và tên</label>
                        <Input
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
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
                        <label>Địa chỉ</label>
                        <Input
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
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

  <option value="1">Hướng dẫn viên</option>
  <option value="2">Khách hàng</option>

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

export default editTour;
