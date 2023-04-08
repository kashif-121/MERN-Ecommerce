import React from "react";
import {Route, Routes } from "react-router-dom";
import ItemView from "../components/ItemView/ItemView";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard/Main/Main";
import Category from "../components/Category/Category";
import AddCategory from "../components/Dashboard/AddCategory/AddCategory";
import Product from "../components/Dashboard/Product/Product";
import AddProduct from "../components/Dashboard/AddProduct/AddProduct";
import NoMatch from "../components/NoMatch/NoMatch";
import Order from "../components/Dashboard/Order/Order";
import Stock from "../components/Dashboard/Stock/Stock";
import AddStock from "../components/Dashboard/AddStock/AddStock";
import Customer from "../components/Dashboard/Customer/Customer";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/product/:id" element={<ItemView />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      {/* Dashboard Routes Start here*/}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="categories" element={<Category />}></Route>
        <Route path="customers" element={<Customer />}></Route>
        <Route path="addCategory" element={<AddCategory />}></Route>
        <Route path="products" element={<Product />}></Route>
        <Route path="addProduct" element={<AddProduct />}></Route>
        <Route path="orders" element={<Order />}></Route>
        <Route path="stock" element={<Stock />}></Route>
        <Route path="addStock" element={<AddStock />}></Route>
      </Route>
      {/* Dashboard Routes End here*/}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Router;
