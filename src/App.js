import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet, Form } from "react-router-dom";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/Cart";

const InstaMart = lazy(()=> import("./components/InstaMart"));
const About = lazy(()=> import("./components/About"));

/* 
  Header
    -logo
    -Nav items(right sides)
    -Cart
  Body
    -search bar
    -restrauntlist
      -restaurantcard
        -image
        -name
        -rating
        -cusines
  Footer
    -links
    -copyright        

*/

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  const [User, setUser] = useState({
    name : "Ayush Gupta",
    email : "itsyaush30@gmail.com"
  });
  return (
    <Provider store = {store}>
     <UserContext.Provider
        value={{
          user: User,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (<Suspense fallback={<h1>"Loading..."</h1>}>
        <About/>
      </Suspense>),
        children:[{
          path:"profile", // parentpath/{path}
          element:<Profile/>
        }

        ]
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/Instamart",
        element: (<Suspense fallback={<h1>"Loading..."</h1>}>
          <InstaMart/>
        </Suspense>),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
