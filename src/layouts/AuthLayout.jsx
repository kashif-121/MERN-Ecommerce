import React from 'react'
import {
  Row,
  Col
  } from 'react-bootstrap';
/**Components import */
import TheHeader from 'components/Header/TheHeader'
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import { Route, Routes } from 'react-router-dom';


const AuthLayout = () => {
  return (
    <>
    <TheHeader/>
    <Row>
        <Col md={10} lg={10} sm={12}>
        <Routes>
        <Route path="login" exact element={<Login />}></Route>
        <Route path="register" exact element={<Register />}></Route>
        </Routes>
        </Col>
    </Row>
    </>
  )
}

export default AuthLayout