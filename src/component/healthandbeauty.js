import React, {Component} from 'react';
import blank from './../images/blank.jpg';

import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'

class Healthandbeauty extends React.Component {
  render() {
    return (
      <div>

      <div class="sidenav">
        <i class="fa fa-user" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px',color:'red'}}></i>
        <h6  style={{color:'red',marginLeft:'15px'}}>Just for You</h6>
        <i class="fa fa-car" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/Category">Electronics Devices</Link>
        <i class="fa fa-car" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/electronicsaccessories">Electronics Accessories</Link>
        <i class="fa fa-mobile" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/tvandhome">TV & Home Appliances</Link>
        <i class="fa fa-car" style={{color:'lightgrey',fontSize:'24px',marginLeft:'30px'}}></i>
        <Link to="/healthandbeauty">Health & Beauty</Link>
        {/* <a href="#">Electronics Accessories</a> */}
      </div>

      <div class="main">
      <h1>Health and beauty</h1>

        <div class="col-sm-4"><img src={blank}/><h6>Cosmetic</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>HairCut</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Perfume</h6></div>

        <div class="col-sm-4"><img src={blank}/><h6>Vitamins</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Towel</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Honey</h6></div>


      </div>

      </div>  
      );
  }
}
export default  Healthandbeauty;