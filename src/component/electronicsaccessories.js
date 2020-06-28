import React, {Component} from 'react';

import HotHammerCool from './../images/HotHammerCool.jpg';
import charger from './../images/charger.png';
import coffeemug from './../images/coffee-mug.png';
import ropeironhooks from './../images/rope-iron-hooks.png';
import bluetooth from './../images/bluetooth.png';
import powersupply from './../images/power-supply.png';
import blank from './../images/blank.jpg';

import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'

class Electronicsaccessories extends React.Component {
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
      <h1>Electronics accessories</h1>

        <div class="col-sm-4"><img src={HotHammerCool}/><h6>Hot Hammer Cool</h6></div>
        <div class="col-sm-4"><img src={charger}/><h6>Smartphone Charger</h6></div>
        <div class="col-sm-4"><img src={coffeemug}/><h6>Coffee mug</h6></div>

        <div class="col-sm-4"><img src={ropeironhooks}/><h6>Rope Iron Hooks</h6></div>
        <div class="col-sm-4"><img src={bluetooth}/><h6>Bluetooth</h6></div>
        <div class="col-sm-4"><img src={powersupply}/><h6>Powersupply</h6></div>

        <div class="col-sm-4"><img src={blank}/><h6>Earbuds</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Speaker</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Camera</h6></div>

      </div>

      </div>  
      );
  }
}
export default  Electronicsaccessories;