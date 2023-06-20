import React from 'react'
import { Button } from 'react-bootstrap'
import './AddCategory.css'

const AddCategory = () => {
  return (
    <div className="category-form-wrapper">
        <form>
            <div className="form-group">
                <label htmlFor="">Name: </label>
                <input type="text" className="form-control" placeholder='Category name'/>
            </div>
            <Button variant='dark' type="submit" className='mt-3'>Add Category</Button>
        </form>
    </div>
  )
}

export default AddCategory