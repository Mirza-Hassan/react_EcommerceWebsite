
import App from './App';
import SignUp from './Signup';
import MainApp from './component/MainApp';
//main app screen
import Category from './component/Category';
import POS from './component/POS';
import Product from './component/product';
import Bulksmsnemail from './component/Bulksmsnemail';
// product
// Bulk SMS/Email

//inner screen
import Electronicsaccessories from './component/electronicsaccessories';
import Tvandhome from './component/tvandhome';
import Healthandbeauty from './component/healthandbeauty';
//tvandhome
//health and beauty

import React from 'react';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'

const Routing = () => (
  <Router>
    <div>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/SignUp">SignUp</Link></li>
        <li><Link to="/MainApp">MainApp</Link></li>
        <li><Link to="/Category">Category</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/Bulksmsnemail">Bulk sms & email</Link></li>
        <li><Link to="/electronicsaccessories">Electronics accessories</Link></li>
        <li><Link to="/tvandhome">Tv & Home Appliances</Link></li>
        <li><Link to="/healthandbeauty">Health & beauty</Link></li>
        <li><Link to="/POS">POS</Link></li>
      </ul> */}

      {/* <hr/> */}

      <Route exact path="/" component={App}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/MainApp" component={MainApp}/>
      <Route path="/Category" component={Category}/>
      <Route path="/Product" component={Product}/>
      <Route path="/Bulksmsnemail" component={Bulksmsnemail}/>
      <Route path="/electronicsaccessories" component={Electronicsaccessories}/>
      <Route path="/tvandhome" component={Tvandhome}/>
      <Route path="/healthandbeauty" component={Healthandbeauty}/>
      <Route path="/POS" component={POS}/>
    </div>
  </Router>
)

export default Routing;
