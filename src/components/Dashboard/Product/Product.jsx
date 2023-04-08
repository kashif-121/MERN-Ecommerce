import React, {useState, useEffect}from 'react'
import TheTopbar from '../Topbar/TheTopbar'
import {Row, Col, Table, Button} from 'react-bootstrap'
import './Product.css'

const Product = () => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
              id: 1,
              title: 'Decorations',
              desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sunt.',
              price: 200,
              discount: 10,
              stock: 100,
              image: 'abc.jpg'
            },
            {
              id: 2,
              title: 'Decorations',
              desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sunt.',
              price: 200,
              discount: 10,
              stock: 100,
              image: 'abc.jpg'
            },
            {
              id: 3,
              title: 'Decorations',
              desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sunt.',
              price: 200,
              discount: 10,
              stock: 100,
              image: 'abc.jpg'
            }
        ])
    }, [])

  return (
    <>
    <div className="product-wrapper">
        <TheTopbar></TheTopbar>
        <div className="product-content p-5">
        <h3>Products List</h3>
            <Row>
                <Col className='mt-2'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.image}</td>
                                            <td>{item.title}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.price}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.stock}</td>
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
    </>
  )
}

export default Product