import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Loader from 'components/UI/Loader/Loader'
import Pagination from 'components/UI/Pagination/Pagination'
import Item from 'components/Item/Item';
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
                loader ? <Loader /> : <Container>
                    <Row>
                        {
                            items?.slice(0, prevItems).map(item => <Item item={item} key={item.id}></Item>)
                        }
                    </Row>
                    {
                        prevItems < items.length && (<Pagination moreItems={showMoreItems}></Pagination>)
                    }
                </Container>
            }
        </>
    )
}

export default Main