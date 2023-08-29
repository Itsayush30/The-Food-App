import React, { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className=" border border-black m-2 p-2">
      <h1 className="font-bold">{title}</h1>
      {isVisible && <p>{description}</p>}

      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsvisibleSection()} // why no error of undefined setIsvisiblesection? // maybe because it is inside setisvisible and it is paased as props
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
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
      <h1 className="font-bold bg-green-600 w-28 my-2 ml-2 rounded-md flex justify-center">
        Instamart
      </h1>
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
