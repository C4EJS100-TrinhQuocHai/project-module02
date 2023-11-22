import React from 'react'
import {useSelector} from "react-redux"
import Products from '../product/Products';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
export default function Home() {
 
  return (
    <div> 
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    
  )
}
