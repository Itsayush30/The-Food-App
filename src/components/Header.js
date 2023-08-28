import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";



const Title = () => (
    <a href="/">
      <img
        className= "flex h-28 p-2 items-center"
        alt="Logo"
        src="https://images-platform.99static.com//U4hUSEXZ4IVHPuxQtNVYMxi81xw=/0x1:1000x1001/fit-in/500x500/99designs-contests-attachments/78/78942/attachment_78942547"
      />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();


    return (
      <div className="flex items-center justify-between bg-green-600">
        <Title />
        <div className="nav-items">
          <ul className="flex py-11 w-3/4 font-semibold ">
           
            <li className="p-6"> 
            <Link to= "/">Home</Link>
           </li>
           <li className="p-6">  
            <Link to= "/about">About</Link>
            </li>
            <li className="p-6">  
            <Link to= "/contact">Contact</Link>
           </li>
           <li className="p-6">  
              Cart</li>
              <li className="p-6">  
            <Link to= "/Instamart">Instamart</Link>
           </li>
          </ul>
        </div>
        <h1>{isOnline ? " ✅" : " 🥲 => 🔴"}</h1>

        <div className="font-semibold p-3 m-6 bg-green-700 rounded-md">
        {isLoggedIn ? 
        (<button onClick={() => setIsLoggedIn(false)}>Logout</button> 
        ):
        ( <button onClick={() => setIsLoggedIn(true)}>Login</button>)}
        </div>
        
        
      </div>
    );
  };

  export default Header; 