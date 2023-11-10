import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables({ type }) {

  const Update = async (id) => {
    // Create the DELETE request
    const request = new Request(
      `http://localhost:8000/api/nurse/medical/update/${id}`,
      {
        method: "PUT",
      }
    );
  
    // Send the request
    const response = await fetch(request);
  
    // Check the response status
    if (response.ok) {
      // Show a success message
      alert("Xóa đơn thành công!");
    } else {
      // Show an error message
      alert("Có lỗi xảy ra!");
    }
  };
  

  const [listdata, setListdata] = useState([]);
  console.log(listdata);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/nurse/medical`);
      const data = await res.json();

      setListdata(data);
    };
    getData();
  }, [listdata]);


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
                      <th>Id khách hàng</th>
                      <th>Triệu chứng</th>
                      <th>Trạng thái</th>
                      <th>Ngày đặt</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    {listdata &&
                      listdata.map((value, id) => {
                        console.log(value);
                        return (
                          <>
                            <tr>
                              <td>{value.idPatient}</td>
                              <td>{value.symptom}</td>
                              <td>{value.status ? 'Đã duyệt' : 'Đang chờ'}</td>
                              <td>{value.createdAt}</td>
                            
                            </tr>
                          </>
                        );
                      })}
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
