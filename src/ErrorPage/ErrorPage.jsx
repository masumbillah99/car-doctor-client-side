import { Link, useRouteError } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Lottie from "lottie-react";
import img from "./98642-error-404.json";

const ErrorPage = () => {
  const { error } = useRouteError();
  //   console.log(error);

  return (
    <>
      <Navbar></Navbar>
      <div className="text-center">
        <Lottie className="w-1/2 mx-auto" animationData={img} />
        <Link
          tp="/"
          className="bg-red-500 hover:bg-red-700 text-white py-3 px-4 mx-auto rounded-lg"
        >
          Back to HomePage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
