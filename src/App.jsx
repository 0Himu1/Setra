import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import MenuItem from './pages/MenuItem';
import Book from './pages/Book';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import TrackOrder from './pages/TrackOrder';
import Confirm from './pages/Confirm';
import Login from './pages/admin/Login';
import SignUp from './pages/admin/SignUp';
import DashBoard from './pages/admin/DashBoard';
import EditMenu from './pages/admin/EditMenu';
import EditBlog from './pages/admin/EditBlog';
import Orders from './pages/admin/Orders';
import OrderRecords from './pages/admin/OrderRecords';
import PopulerItems from './pages/admin/PopulerItems';
import Profile from './pages/admin/Profile';
import PrivateOutlate from './components/PrivateOutlate';
import PrivateOutlateIfLoggedIn from './components/PrivateOutLateIfLoggedIn';

function App() {
  return (
    <>
      <Navbar />

      {/* Public Routs */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<MenuItem />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<MenuItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/confirm" element={<Confirm />} />

        {/* Privet Routs */}
        <Route path="/admin/*" element={<PrivateOutlateIfLoggedIn />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/admin/*" element={<PrivateOutlate />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="editmenu" element={<EditMenu />} />
          <Route path="editblog" element={<EditBlog />} />
          <Route path="editpopuler" element={<PopulerItems />} />
          <Route path="orderrecords" element={<OrderRecords />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
