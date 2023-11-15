import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Tables({ type }) {
  <ToastContainer />
  const Delete = async (id) => {
    const request = new Request(`http://localhost:8000/api/user/delete/${id}`, {
      method: "DELETE",
    });

    const response = await fetch(request);

    if (response.ok) {
      // Thay đổi trạng thái để trigger useEffect
      setIsDelete(!isDelete);
      alert("Xóa người dùng thành công!");

          toast.success("đặt thành công !", {
          position: toast.POSITION.TOP_RIGHT,
        });
    } else {
      alert("Có lỗi xảy ra!");
    }
  };

  const [listdata, setListdata] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/user`);
      const data = await res.json();
      setListdata(data);
    };
    
    getData();
  }, [isDelete]);
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
                      <th>Tên tài khoản</th>
                      <th>Email</th>
                      <th>Vai trò</th>
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listdata &&
                      listdata.map((value, id) => {
                        return (
                          <tr key={id}>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>{value.role}</td>
                            <td className="text-center">
                              <Link to={`/uploadPatient/${value._id}`} className="btn btn-primary mx-2">
                                Sửa
                              </Link>
                              <button onClick={() => Delete(value._id)} className="btn btn-danger mx-2">
                                Xoá
                              </button>
                            </td>
                          </tr>
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
