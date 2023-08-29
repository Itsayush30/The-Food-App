import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
    return (
        <div>
            <h1>About us page</h1>
            <p>
                {" "}
                "Discover delicious dishes at unbeatable prices. Order online now!"
            </p>
            <Outlet/>
        </div>
    );
};

export default About;