import { useState,useEffect } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  useEffect(()=>{
    console.log("useEffect called");
    
  },[btnNameReact]);

    return (
      <div className="header">
        <img
          className="header-image"
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          role="presentation"
        />
        <div className="nav-bar">
          <div className="d-app">Get the App</div>
          <div className="nav-right">
            <ul>
              <li>Invester relation</li>
              <li>Add restaurent</li>
              <li
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log("btn clicked");
            }}
          >
            {btnNameReact}
          </li>
              <li>Sign up</li>
            </ul>
          </div>
        </div>
        <div className="headings">
          <img
            className="zomato-img"
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          />
          <h3 className="heading2">
            Discover the best food & drinks in Delhi NCR
          </h3>
          <div className="search-bar">
            <input
              className="search-location"
              placeholder="muzaffarpur,bihar"
            ></input>
            <input
              className="search"
              placeholder="Search for restorant, cuisine ora dish"
            ></input>
          </div>
        </div>
      </div>
    );
  };



export default Header;