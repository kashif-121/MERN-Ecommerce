import React from "react";
import {Route, Routes } from "react-router-dom";
import ItemView from "../components/ItemView/ItemView";
import Login from "../components/Login/Login";
import MainLayout from "layouts/MainLayout";
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
import Main from "components/Main/Main";
import CatProduct from "components/CatProducts/CatProduct";

const Router = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="products/:cat" element={<CatProduct/>}></Route>
          <Route path="/product/:id" element={<ItemView />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </MainLayout>

      {/* Dashboard Routes Start here*/}
      <Routes>
      <Route path="/dashboard" exact element={<Dashboard />}>
        <Route path="categories" exact element={<Category />}></Route>
        <Route path="customers" exact element={<Customer />}></Route>
        <Route path="addCategory" exact element={<AddCategory />}></Route>
        <Route path="products" exact element={<Product />}></Route>
        <Route path="addProduct" exact element={<AddProduct />}></Route>
        <Route path="orders" exact element={<Order />}></Route>
        <Route path="stock" exact element={<Stock />}></Route>
        <Route path="addStock" exact element={<AddStock />}></Route>
      </Route>
      {/* Dashboard Routes End here*/}
      {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
};

export default Router;
