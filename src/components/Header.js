import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="Logo"
        src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();


    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
           
            <li> 
            <Link to= "/">Home</Link>
           </li>
           <li> 
            <Link to= "/about">About</Link>
            </li>
           <li> 
            <Link to= "/contact">Contact</Link>
           </li>
            <li>Cart</li>
          </ul>
        </div>
        <h1>{isOnline ? " ✅" : " 🥲 => 🔴"}</h1>

        {isLoggedIn ? 
        (<button onClick={() => setIsLoggedIn(false)}>Logout</button> 
        ):
        ( <button onClick={() => setIsLoggedIn(true)}>Login</button>)}
        
        
      </div>
    );
  };

  export default Header;