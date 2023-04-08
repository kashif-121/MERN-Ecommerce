import React from 'react'
import { Link } from 'react-router-dom'
import { BsGridFill } from "react-icons/bs";
import './TheSidebar.css'

const TheSidebar = () => {
  return (
    <>
    <div className="sidebar-wrapper">
    <Link className="brand">MINIECOM</Link>
        <ul className="navbar">
            <li>
                <Link to="/dashboard"><BsGridFill /> Dashboard</Link>
            </li>
            <li>
                <Link to="customers"><BsGridFill /> Customers</Link>
            </li>
            <li className='parent'>
                <a href="#"><BsGridFill /> Categories</a>
                <ul className='dropdown'>
                    <li>
                        <Link to='categories'>All Categories</Link>
                    </li>
                    <li>
                        <Link to='addCategory'>Add Category</Link>
                    </li>
                </ul>
            </li>
            <li className='parent'>
                <a href="#"><BsGridFill /> Products</a>
                <ul className='dropdown'>
                    <li>
                        <Link to="products">All Products</Link>
                    </li>
                    <li>
                        <Link to="addProduct">Add Product</Link>
                    </li>
                </ul>
            </li>
            <li className="parent">
                <a href="#"><BsGridFill /> Orders</a>
                <ul className='dropdown'>
                    <li>
                        <Link to="orders">All Orders</Link>
                    </li>
                </ul>
            </li>
            <li className="parent">
                <a href="#"><BsGridFill /> Stock</a>
                <ul className='dropdown'>
                    <li>
                        <Link to="stock">Stock</Link>
                    </li>
                    <li>
                        <Link to="addStock">Add Stock</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/orders"><BsGridFill /> Settings</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default TheSidebar