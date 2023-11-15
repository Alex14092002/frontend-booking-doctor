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
  const Delete = async (id) => {
    // Create the DELETE request
    const request = new Request(
      `http://localhost:8000/api/medicine/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    // Send the request
    const response = await fetch(request);

    // Check the response status
    if (response.ok) {
      setIsDelete(!isDelete);
      alert("Xóa thuốc thành công!");
    } else {
      // Show an error message
      alert("Có lỗi xảy ra!");
    }
  };

  const [listdata, setListdata] = useState([]);
  const [isDelete, setIsDelete] = useState(false);


  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/medicine`);
      const data = await res.json();

      setListdata(data);
    };
    getData();
  }, [isDelete]);

  return (
    <>
      <div className="content">
        <Link to='/addmedicine'
         
          class="btn btn-primary"
        >
          Thêm thuốc
        </Link>

     
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
                      <th>Tên thuốc</th>
                      <th>Giá thuốc</th>
                      <th>Ảnh</th>
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listdata &&
                      listdata.map((value, id) => {
                        console.log(value);
                        return (
                          <>
                            <tr>
                              <td>{value.name}</td>
                              <td>{value.price}</td>
                              <td>
                                <img
                                  src={`http://localhost:8000/${value.image}`}
                                  width="150px"
                                />
                              </td>
                              <td className="text-center">
                                <Link
                                  to={`/updateMedicine/${value._id}`}
                                  className="btn btn-primary mx-2"
                                >
                                  Sửa
                                </Link>
                                <button
                                  onClick={() => Delete(value._id)}
                                  className="btn btn-danger mx-2"
                                >
                                  Xoá
                                </button>
                              </td>
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
