import React from 'react'
import { Button} from 'react-bootstrap'
import './Pagination.css'

const Pagination = ({moreItems}) => {
  return (
        <Button variant="dark" className="pagination-btn" onClick={moreItems}>Load More</Button>
  )
}

export default Pagination