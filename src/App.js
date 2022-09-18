import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import TopProduct from './component/Layout/TopProduct';
import Reason from './component/Layout/Reason';
import Preferential from './component/Layout/Preferential';
import React, { useEffect, useState } from 'react'
import image from './assets/goTop.png'
import ListProducts from './component/Product/ListProducts';
import CreateProduct from './component/Product/CreateProduct';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from './component/Product/EditProduct';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <TopProduct></TopProduct>
        <Preferential></Preferential>
        <Routes>
          <Route path="/" element={<ListProducts />} />          
          <Route path="/create" element={<CreateProduct/>} />
          <Route path="/edit/:id" element={<EditProduct/>} />
        </Routes>
        <Reason></Reason>
      </div>
      <Footer></Footer>
      {
        showTop && (
          <img className="goTop" src={image} style={{ position: 'fixed', right: 20, bottom: 20, width: '60px', cursor:'pointer' }} onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}/>
        )
      }
    </div>
  );
}

export default App;

