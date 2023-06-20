import React from 'react'
import { Button } from 'react-bootstrap'
import './AddStock.css'

const AddStock = () => {
  return (
    <div className="stock-form-wrapper">
        <form>
          <h3>Add Stock</h3>
            <div className="form-group">
                <label htmlFor="">Product: </label>
                <select name="" id="" className="form-control">
                  <option value="">TShirt</option>
                  <option value="">Caps</option>
                  <option value="">Jeans</option>
                </select>
                <label htmlFor="">Stock</label>
                <input type="text" placeholder="Number" className="form-control"/>
            </div>
            <Button variant='dark' type="submit" className='mt-3'>Add Stock</Button>
        </form>
    </div>
  )
}

export default AddStock