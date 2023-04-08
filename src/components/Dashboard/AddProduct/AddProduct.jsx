import React from 'react'
import { Button } from 'react-bootstrap'
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className='add-product-form'>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Product Title</label>
                    <input type="text" className="form-control" value="Product Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Short Description</label>
                    <input type="text" className="form-control" value="Product Short Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="10" className='form-control'></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="text" className="form-control" value="0.00" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Discount</label>
                    <input type="text" className="form-control" value="0.00" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Stock</label>
                    <input type="text" className="form-control" value="0" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="form-group">
                    <img src="" alt="" height="200" width="200" />
                </div>
                <Button variant="dark" type="submit" className='mt-3'>Add Product</Button>
            </form>
        </div>
    )
}

export default AddProduct