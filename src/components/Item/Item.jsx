import React from 'react'
import {
    Row,
    Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({item}) => {
  return (
        <Col xs={4} className="mt-5">
            <div className="card-wrapper" key={item.id}>
                <div className='card'>
                    <Link to={'product/'+item.id}>
                        <img src={item.image} alt={item.image} height="200" width="200" />
                    </Link>
                </div>
                <div className="card-footer">
                    <Row>
                        <Col md={10}>
                            {item.title}
                            <Row><Col>RS {item.price}</Col></Row>
                        </Col>
                        <Col md={2} className="text-right">
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
  )
}

export default Item