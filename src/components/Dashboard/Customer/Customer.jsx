import React, {useState, useEffect}from 'react'
import TheTopbar from '../Topbar/TheTopbar'
import {Row, Col, Table, Button} from 'react-bootstrap'
import './Customer.css'

const Customer = () => {

  const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers([
            {
              id: 1,
              image: 'abc.jpg',
              name: 'kashif',
              email: 'kashif@gmail.com',
              address: 'Peshawar',
              status: 'active',
              joined: '10/2/2023'
            },
        ])
    }, [])

  return (
    <>
    <div className="customer-wrapper">
        <TheTopbar></TheTopbar>
        <div className="customer-content p-5">
        <h3>Customers List</h3>
            <Row>
                <Col className='mt-2'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Joined</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.image}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.status}</td>
                                            <td>{item.joined}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <Button variant='warning'>Status</Button>
                                                    <Button variant='danger' className="ml-3">Delete</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default Customer