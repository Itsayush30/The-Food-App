import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    //const params = useParams(); also we can write  ;
    //const {id} = params; 
    const { id } = useParams()
    console.log(params);
    return(
        <div>
            <h1>Restaurant id : {id}</h1>
            <h2>Namaste</h2>
        </div>
    )
}

export default RestaurantMenu;