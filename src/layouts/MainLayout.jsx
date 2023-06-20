import React from 'react'
import {
  Row,
  Col
  } from 'react-bootstrap';
/**Components import */
import TheHeader from 'components/Header/TheHeader'
import Sidebar from 'components/Sidebar/Sidebar';


const MainLayout = ({ children }) => {
  return (
    <>
    <TheHeader/>
    <Row>
        <Col md={2} lg={2} sm={12}>
            <Sidebar></Sidebar>
        </Col>
        <Col md={10} lg={10} sm={12}>
        {children}
        </Col>
    </Row>
    </>
  )
}

export default MainLayout