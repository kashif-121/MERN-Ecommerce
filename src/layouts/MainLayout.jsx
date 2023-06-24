import React from 'react'
import {
  Row,
  Col
  } from 'react-bootstrap';
/**Components import */
import TheHeader from 'components/Header/TheHeader'
import Sidebar from 'components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Main from 'components/Main/Main';
import CatProduct from 'components/CatProducts/CatProduct';
import ItemView from 'components/ItemView/ItemView';


const MainLayout = () => {
  return (
    <>
    <TheHeader/>
    <Row>
        <Col md={2} lg={2} sm={12}>
            <Sidebar></Sidebar>
        </Col>
        <Col md={10} lg={10} sm={12}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="products/:cat" element={<CatProduct/>}></Route>
          <Route path="/product/:id" element={<ItemView />}></Route>
        </Routes>
        </Col>
    </Row>
    </>
  )
}

export default MainLayout