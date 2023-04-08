import React, { useState, useEffect } from 'react'
import TheTopbar from '../Topbar/TheTopbar'
import { Row, Col, Table, Button, Badge } from 'react-bootstrap'
import './Stock.css'

const Stock = () => {
    const [Stocks, setStocks] = useState([])

    useEffect(() => {
        setStocks(
            [
                {
                    id: 1,
                    product: 'TShirt',
                    stock: '10'
                },
                {
                  id: 2,
                  product: 'Jeans',
                  stock: '10'
              },
              {
                id: 3,
                product: 'Caps',
                stock: '50'
            },
            ]
        )
    }, [])
    return (
        <div className="stock-wrapper">
            <TheTopbar></TheTopbar>
            <div className="stock-content p-5">
                <h3>Stock List</h3>
                <Row>
                    <Col className='mt-2'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>∫
                            <tbody>
                                {
                                    Stocks.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.product}</td>
                                                <td><Badge bg={item.stock <= 10 ? 'danger' : 'success'}>{item.stock}</Badge></td>
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

export default Stock