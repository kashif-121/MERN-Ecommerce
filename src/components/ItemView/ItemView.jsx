import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import ReactImageMagnify from 'react-image-magnify';

/** components **/
import Loader from '../UI/Loader/Loader'
import './ItemView.css'

const ItemView = () => {
    const params = useParams()
    const id = params.id
    const [item, setItem] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then(res => {
                setItem(res.data)
                setLoader(false)
            }).catch(err => console.log(err))
    }, [id])

    return (
        <Container className="ItemView-wrapper">
            {
                loader === true ?
                    <Loader /> : <><h3>{item.title}</h3>
                        <Row className='mt-5'>
                            <Col md={6}>
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: item.title,
                                            isFluidWidth: true,
                                            src: item.image,
                                            width: 400,
                                            height: 400
                                        },
                                        largeImage: {
                                            src: item.image,
                                            width: 400,
                                            height: 400,
                                        },
                                        enlargedImageContainerStyle: {
                                            zIndex: "1500",
                                        },
                                        enlargedImageContainerDimensions: {
                                            width: 300,
                                            height: 300,
                                        },
                                    }}
                                />
                                {/* <img src={item.image} alt={item.title} height="500px" width="100%" /> */}
                            </Col>
                            <Col md={6}>
                                <h3>Description:</h3>
                                <p>{item.description}</p>
                                <h4>Category:</h4>
                                <p>{item.category}</p>
                                <span>
                                    <h4>Price: <span className='font-weight-bold price'>{`RS ${item.price}`}</span></h4>
                                </span>
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