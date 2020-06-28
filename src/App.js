import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import {  BrowserRouter as Router,  Route,  Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <div className="align">
        <div id="floatContainer" class="float-container">
          <label style={{color:'black',marginLeft:'10px'}}> Mobile Number</label>
          <input id="floatField" type="text" style={{fontSize:'24px',width:'140%',height:'70px',marginBottom:'7%'}}/>
        </div>
        <div id="floatContainer" class="float-container">
          <label style={{color:'black',marginLeft:'10px',marginTop:'-15px'}}> SMS Code</label>
          <div className="form">
            <input type ="text" style={{fontSize:'24px'}}  className="input2"/>
            <Button className="btn" variant="outlined" color="primary">Send</Button>
            {/* <button className="btn">Send</button> */}
          </div>
          <br/>


          <Link to="/MainApp">
          <Button  variant="contained" color="secondary"  style={{fontSize:'24px'}}>NEXT</Button>&nbsp;&nbsp;
          </Link>
          <Link to="/signup">
          <Button variant="contained" color="primary" style={{fontSize:'24px'}}>SIGNUP</Button>
          </Link>

          {/* <button className="button"> NEXT</button> */}
        </div>
        {/* <form>
          <input type ="text" style={{fontSize:'24px',width:'140%',height:'70px',marginBottom:'7%'}}/><br/>

          <div className="form">
            <input type ="text"  className="input2"/>
            <button className="btn">Send</button>
          </div>
          <button className="button"> NEXT</button>
        </form> */}
      </div>
      <div className="align1">
        <p style={{color:'white',fontSize:'24px'}}>CONNECT WITH OTHER WAYS</p>
      <div style={{display:'flex'}}>
              <div className="facebook"></div>
              <div className="google"></div>
          </div>
          <div style={{display:'flex'}}>
              <div className="linkedin"></div>
              <div className="inst"></div>
          </div>
      <div>
      </div></div>

    </div>


  );
}

export default App;
