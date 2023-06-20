import React, { useState, useEffect } from 'react'
import TheTopbar from '../Topbar/TheTopbar'
import { Row, Col, Table, Button } from 'react-bootstrap'
import './Order.css'

const Order = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        setOrders(
            [
                {
                    id: 1,
                    c_name: 'kashif',
                    email: 'kashif@gmail.com',
                    phone: '123',
                    title: 'Pizza',
                    image: 'abc.jpg',
                    qty: '1',
                    price: '100'
                },
                {
                    id: 2,
                    c_name: 'kashif2',
                    email: 'kashif2@gmail.com',
                    phone: '123',
                    title: 'Pizza',
                    image: 'abc.jpg',
                    qty: '1',
                    price: '100'
                },
                {
                    id: 3,
                    c_name: 'kashif3',
                    email: 'kashif3@gmail.com',
                    phone: '123',
                    title: 'Pizza',
                    image: 'abc.jpg',
                    qty: '1',
                    price: '100'
                },
            ]
        )
    }, [])
    return (
        <div className="order-wrapper">
            <TheTopbar></TheTopbar>
            <div className="order-content p-5">
                <h3>Order List</h3>
                <Row>
                    <Col className='mt-2'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.image}</td>
                                                <td>{item.title}</td>
                                                <td>{item.c_name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.qty}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <Button variant='warning'>Edit</Button>
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
    )
}

export default Order