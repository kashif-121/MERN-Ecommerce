import React from 'react'
import {
  Row,
  Col
  } from 'react-bootstrap';
/**Components import */
import { Route, Routes } from 'react-router-dom';
import Category from 'components/Category/Category';
import Customer from 'components/Dashboard/Customer/Customer';
import AddCategory from 'components/Dashboard/AddCategory/AddCategory';
import Product from 'components/Dashboard/Product/Product';
import AddProduct from 'components/Dashboard/AddProduct/AddProduct';
import Order from 'components/Dashboard/Order/Order';
import Stock from 'components/Dashboard/Stock/Stock';
import AddStock from 'components/Dashboard/AddStock/AddStock';
import Main from 'components/Dashboard/Main/Main';
import TheSidebar from 'components/Dashboard/Sidebar/TheSidebar';


const DashboardLayout = () => {
  return (
    <>
    <Row>
        <Col md={2} lg={2} sm={12}>
        <TheSidebar></TheSidebar>
        </Col>
        <Col md={10} lg={10} sm={12}>
        <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="categories" exact element={<Category />}></Route>
        <Route path="customers" exact element={<Customer />}></Route>
        <Route path="addCategory" exact element={<AddCategory />}></Route>
        <Route path="products" exact element={<Product />}></Route>
        <Route path="addProduct" exact element={<AddProduct />}></Route>
        <Route path="orders" exact element={<Order />}></Route>
        <Route path="stock" exact element={<Stock />}></Route>
        <Route path="addStock" exact element={<AddStock />}></Route>
        </Routes>
        </Col>
    </Row>
    </>
  )
}

export default DashboardLayout