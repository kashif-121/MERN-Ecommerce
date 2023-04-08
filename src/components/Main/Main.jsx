import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
Container,
Row,
Col
} from 'react-bootstrap';
import Item from '../Item/Item'
import Category from '../Category/Category'
import Loader from '../UI/Loader/Loader'
import Pagination from '../UI/Pagination/Pagination'
const Main = () => {
    const [loader, setLoader] = useState(true)
    const [items, setItems] = useState([])
    const [prevItems, setprevItems] = useState(6)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setItems(res.data)
                setLoader(false)
            }).catch((error) => console.error(error))
    }, []);

    const showMoreItems = () => {
        setprevItems(prevItems + 6)
    }
    return (
        <>
        {
            loader === true ? <Loader/> :<Container>
            <Row>
                <Col md={4} lg={4}>
                    <Category></Category>
                </Col>
                <Col md={8} lg={8}>
                    <Row>
                    {
                        items?.slice(0, prevItems).map(item => <Item item={item} key={item.id}></Item>)
                    }
                    </Row>
                </Col>
            </Row>
            {
                prevItems < items.length  ? <Pagination moreItems={showMoreItems}></Pagination> : ''
            }
        </Container>
        }
        </>
    )
}

export default Main