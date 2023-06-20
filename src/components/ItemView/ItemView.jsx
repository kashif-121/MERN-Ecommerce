import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loader from '../UI/Loader/Loader'
import './ItemView.css'

const ItemView = () => {
    const params = useParams()
    const id = params.id
    const [item, setItem] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/'+id)
        .then(res => {
            setItem(res.data)
            setLoader(false)
        }).catch(err => console.log(err))
    }, [id])

  return (
    <Container className="ItemView-wrapper">
        {
            loader === true ? 
            <Loader/> : <><h3>{item.title}</h3>
            <Row className='mt-5'>
                <Col md={8}>
                    <img src={item.image} alt={item.title}/>
                </Col>
                <Col md={4}>
                    <h6>Description:</h6>
                    <p>{item.description}</p>
                    <h6>Category:</h6>
                    <p>{item.category}</p>
                    <h6>Price: </h6>
                    <h5 className='font-weight-bold'>RS {item.price}</h5>
                    <div className="d-grid gap-2">
                    <Button variant="dark" size="lg">Add to cart</Button>
                    </div>
                </Col>
            </Row>
            </>
         }
    </Container>
  )
}

export default ItemView