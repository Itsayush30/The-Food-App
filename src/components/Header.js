import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

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

    const {user} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
      <div className="flex items-center justify-between bg-green-600">
        <Title />
        <div className="nav-items">
          <ul className="flex py-11 font-semibold ">
           
            <li className="px-6"> 
            <Link to= "/">Home</Link>
           </li>
           <li className="px-6">  
            <Link to= "/about">About</Link>
            </li>
            <li className="px-6">  
            <Link to= "/contact">Contact</Link>
           </li>
              <li className="px-6">  
            <Link to= "/Instamart">Instamart</Link>
           </li>
           <li className="px-6">  
            <Link to= "/Cart">Cart- {cartItems.length} items</Link>
           </li>
          </ul>
        </div>
        <h1>{isOnline ? " ✅" : " 🥲 => 🔴"}</h1>

        <span className="p-10 font-bold text-red-900">{user.name}</span>


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