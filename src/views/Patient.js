

import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

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
  const [listdata , setListdata] = useState([])
  console.log(listdata);

  useEffect(() => {
    const getData = async () =>{
      const res = await fetch(`http://localhost:8000/api/user`)
      const data = await res.json()
      
      setListdata(data)
    }
    getData()
  }, []);
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
                      <th>Họ và tên</th>
                      <th>Email</th>
                      <th>Vai trò</th>
                      <th className="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                      { listdata && (
                        listdata.map(( value , id ) =>{
                          console.log(value);
                          return(
                            <>
                               <tr>
                          <td>{value.username}</td>
                          <td>{value.email}</td>
                          <td>{value.role}</td>
                          <td className="text-center">
                            <Link to={`/uploadPatient/id`} className='btn btn-primary mx-2'>Sửa</Link>
                            <button className='btn btn-danger mx-2'>Xoá</button>
                          </td>
                        </tr>
                            </>
                          )
                         
                        })
                        
                      )

                      }
                    
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
