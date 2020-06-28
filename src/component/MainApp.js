import banner from './../images/banner.jpg';
import banner2 from './../images/banner2.jpg';

import category from './../images/category.png';
import product from './../images/product.png';
import POS from './../images/POS.png';
import bulksmsnemail from './../images/bulksmsnemail.png';

import vendor from './../images/vendor.png';
import blogs from './../images/blogs.png';
import insurance from './../images/insurance.png';
import discount from './../images/discount.png';

import React, {Component} from 'react';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'

class MainApp extends React.Component {
  render() {
    return (
<div>
<img src={banner} />
<img src={banner2} />

{/* image2 */}

<div class="row-1"  style={{marginLeft:'130px'}}>
    <Link to="/Category">
    <div class="col-sm-3"><img src={category}/><h6 style={{marginLeft:'20px'}}>Category</h6></div>
    </Link>
    <Link to="/Product">
    <div class="col-sm-3"><img src ={product}/><h6 style={{marginLeft:'20px'}}>Product</h6></div>
    </Link>
    <Link to="/POS">
    <div class="col-sm-3"><img src={POS}/><h6 style={{marginLeft:'20px'}}>POS</h6></div>
    </Link>
    <Link to="/Bulksmsnemail">
    <div class="col-sm-3"><img src={bulksmsnemail}/><h6 style={{marginLeft:'20px'}}>Bulk SMS/Email</h6></div>
    </Link>
  </div>

  <div class="row-2" style={{marginLeft:'130px'}}>
    <div class="col-sm-3"><img src={vendor}/><h6 style={{marginLeft:'20px'}}>Vendor</h6></div>
    <div class="col-sm-3"><img src={blogs}/><h6 style={{marginLeft:'20px'}}>Blogs</h6></div>
    <div class="col-sm-3"><img src={insurance}/><h6 style={{marginLeft:'20px'}}>Insurance/Talakful</h6></div>
    <div class="col-sm-3"><img src={discount}/><h6 style={{marginLeft:'20px'}}>Discounts</h6></div>
  </div>

</div>  
      );
  }
}
export default  MainApp;