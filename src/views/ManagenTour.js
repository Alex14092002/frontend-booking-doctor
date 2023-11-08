
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables({type}) {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">{type}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Tên tour</th>
                      <th>Thời gian</th>
                      <th>Tình trạng</th>
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link to='/editTour' className='btn btn-primary mx-2'>Sửa</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-primary mx-2'>Sửa</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-primary mx-2'>Sửa</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-primary mx-2'>Sửa</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">
                        <Link className='btn btn-primary mx-2'>Sửa</Link>
                        <button className='btn btn-danger mx-2'>Xoá</button>
                      </td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Tables;
