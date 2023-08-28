   import { useRouteError } from "react-router-dom";

   
   const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="flex flex-col justify-center items-center my-24">
  <h1 className="font-extrabold bg-green-600 text-white p-5 mb-8 text-3xl rounded-lg">Oops!!</h1>
  <h2 className="font-extrabold text-green-600 text-3xl">Something went wrong!</h2>
  <h3 className="font-extrabold text-green-600 text-3xl">{err.status + " : " + err.statusText}</h3>
</div>
    )
    }

    export default Error;