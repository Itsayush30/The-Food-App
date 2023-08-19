import { useState } from "react";

const loggedInUser = () => {
  //API call to check authentication
  return false;
};

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

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? 
        (<button onClick={() => setIsLoggedIn(false)}>Logout</button> 
        ):
        ( <button onClick={() => setIsLoggedIn(true)}>Login</button>)}
        
        
      </div>
    );
  };

  export default Header;