import React from 'react'
import { Button} from 'react-bootstrap'
import './Pagination.css'

const Pagination = ({moreItems}) => {
  return (
    <div className="pagination-wrapper">
      <Button variant="dark" className="pagination-btn" onClick={moreItems}>Load More</Button>
    </div>
  )
}

export default Pagination