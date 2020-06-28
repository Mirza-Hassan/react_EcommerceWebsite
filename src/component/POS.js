import React, {Component} from 'react';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
import './category.css';

class POS extends React.Component {
  render() {
    return (
      <div>

    <div class="sidenav">
        <h3  style={{marginLeft:'15px'}}>Vendor</h3>
        <i class="fa fa-car" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/Category">Imtiaz Mart</Link>
        <i class="fa fa-car" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/Category">Chase Up</Link>
        <i class="fa fa-car" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/Category">Lucky One Mall</Link>
        {/* <a href="#">Electronics Accessories</a> */}
      </div>

    </div>  
      );
  }
}
export default  POS;