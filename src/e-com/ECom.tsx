import React , { Children , useContext , useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Headerr from './HeaderFooter/Header';
import PDListPage from './/PD/PDListPage'
import Footer from './HeaderFooter/Footer';
import ProductDetail from './ProdDetail/ProductDetail';
import AlertState from './Context/AlertContext';
import { CartState } from './Context/CartContext';
import Cart from './Cart/Cart';
import Contact from './About-Contact/Contact';
import About from './About-Contact/About';
import Home from './PD/Home';
import Auth from './Authentication/Auth';
import { UserState } from './Context/UserContext';
import Error from './Error_&_Loading/Error';
import Product from './PD/Product';


const ECom = () => {


    return (
        <UserState >
        <CartState>
        <AlertState>
        



    <Headerr/> 


    <Routes>

    

    <Route path='/' element={<Home />} />
    <Route path='/products' element={<PDListPage />} />
    <Route path="/products/:id"  element={<ProductDetail />}  />
    <Route  path='/contact' element = { <Contact /> } />
    <Route  path = '/carts' element = { <Cart /> } />
    <Route  path = '/About' element = {  <About /> } />
    <Route  path = '/my-account' element = {  <Auth />} />
    <Route path="*" element={<Error />} />


    </Routes>
    <Footer />


    </AlertState>
    </CartState>        
    </UserState>
    )
}

export default ECom