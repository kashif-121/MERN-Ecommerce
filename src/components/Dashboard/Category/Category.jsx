import React, { useState, useEffect } from 'react'
import {
    Row,
    Col,
    Table,
    Button
} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import './Category.css'


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            {
                id: 1,
                name: 'Decorations'
            },
            {
                id: 2,
                name: 'Interior'
            },
            {
                id: 3,
                name: 'Electronics'
            }
        ])
    }, [])

    return (
        <>
        <div className="category-wrapper">
            <h3>Categories List</h3>
            <Row>
                <Col className='mt-2'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
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
        </>
    )
}

export default Category