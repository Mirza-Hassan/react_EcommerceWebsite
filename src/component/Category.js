import React, {Component} from 'react';
import cables from './../images/cables.jpg';
import video from './../images/video-conference.png';
import cablesdevice from './../images/cable-device.png';
import smarttv from './../images/smart-tv-box.png';
import airconditioner from './../images/air-conditioner.png';
import microphones from './../images/microphones.jpg';
import blank from './../images/blank.jpg';
import './category.css';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
class Category extends React.Component {
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
        <h1>Electronics devices</h1>
        <div class="col-sm-4"><img src={cables}/><h6>Cables & Converters</h6></div>
        <div class="col-sm-4"><img src={video}/><h6>Video conference</h6></div>
        <div class="col-sm-4"><img src={smarttv}/><h6>Smart TV box</h6></div>

        <div class="col-sm-4"><img src={cablesdevice}/><h6>Cable wires</h6></div>
        <div class="col-sm-4"><img src={airconditioner}/><h6>Air conditioner</h6></div>
        <div class="col-sm-4"><img src={microphones}/><h6>Microphones</h6></div>

        <div class="col-sm-4"><img src={blank}/><h6>Science Fictions Book</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Bathroom</h6></div>
        <div class="col-sm-4"><img src={blank}/><h6>Blenders</h6></div>

      </div>

    </div>  

  );
  }
}
export default  Category;