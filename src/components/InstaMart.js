import React, { useState } from "react";
import ImageInsta from "../Images/FooterVisual.webp"

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className=" border border-green-700 rounded-lg m-2 p-2 bg-green-300">
      <h1 className="font-bold">{title}</h1>
      {isVisible && <p>{description}</p>}

      {isVisible ? (
        <button
          className="cursor-pointerc text-sm p-1 rounded-lg text-green-600"
          onClick={() => setIsvisibleSection()} // why no error of undefined setIsvisiblesection? // maybe because it is inside setisvisible and it is paased as props
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointerc text-sm p-1 rounded-lg text-green-600"
          onClick={() => setisVisible()}
        >
          show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  [visibleSection, setIsvisibleSection] = useState();

  return (
    <div>
       
       <div className="flex justify-center">
        <p className=" flex m-20 p-5 items-center rounded-3xl shadow-lg bg-orange-400 text-slate-200 text-7xl h-56 font-semibold">InstaMart Coming Soon!!!</p>
     
      <img
      className="h-[40rem]"
      alt="ImageInsta"
      src={ImageInsta}
    />
     </div>
     
      <Section
        title={"About Instamart"}
        description={
          "Swiggy is an Indian online food ordering and delivery platform. It was founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini, and it is headquartered in Bangalore, India. Swiggy has grown to become one of the largest and most popular food delivery platforms in India Swiggy is an Indian online food ordering and delivery platform. It was founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini, and it is headquartered in Bangalore, India. Swiggy has grown to become one of the largest and most popular food delivery platforms in India. ."
        }
        isVisible={visibleSection == "About"}
        setisVisible={() => setIsvisibleSection("About")}
      />
      <Section
        title={"History Instamart"}
        description={
          "Swiggy is an Indian online food ordering and delivery platform. It was founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini, and it is headquartered in Bangalore, India. Swiggy has grown to become one of the largest and most popular food delivery platforms in India.Swiggy is an Indian online food ordering and delivery platform. It was founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini, and it is headquartered in Bangalore, India. Swiggy has grown to become one of the largest and most popular food delivery platforms in India.."
        }
        isVisible={visibleSection == "History"}
        setisVisible={() => setIsvisibleSection("History")}
      />
    
    </div>
  );
};
export default InstaMart;
