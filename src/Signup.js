import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="container">
      <div className="align">
          <Button className="create" variant="contained" color="secondary"> CREATE AN ACCOUNT</Button><br/><br/>
          {/* <button className="create">CREATE AN ACCOUNT</button><br/> */}
          <Link to="/MainApp">
          <Button className="login" variant="contained" color="primary">Login</Button>
          </Link>
          {/* <button className="login"> Login</button> */}
      </div>
      {/* align issue */}
      <div className="align2">
          <p style={{color:'white',fontSize:'24px'}}>CONNECT WITH OTHER WAYS</p>
          <div style={{display:'flex'}}>
              <div className="facebook"></div>
              <div className="google"></div>
          </div>
          <div style={{display:'flex'}}>
              <div className="linkedin"></div>
              <div className="inst"></div>
          </div>
      </div>
    </div>
  );
}

export default SignUp;
