import { Button } from "@material-tailwind/react";
import React from "react";
import { GiOrangeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className=" h-[100vh]  flex justify-center items-center bg-white">
      <div className=" p-4 flex-col text-center ">
        <div className="flex justify-center items-center mb-6 ">
          <h1 className="font-bold lg:text-5xl text-2xl  text-primary ">
            Oops!
          </h1>
          <div>
            {" "}
            <GiOrangeSlice className="lg:w-48 w-32 lg:h-40 h-32 text-primary" />
          </div>
        </div>
        <div className="font-bold text-xl"> 404 - PAGE NOT FOUND </div>
        <div className=" lg:w-6/12 w-11/12  mt-5 m-auto ">
          <p className="font-light mb-5">
            We couldn't find the page you were looking for. It seems that the
            link you followed may be broken or the page has been moved. Please
            check the URL for any errors or return to the homepage.
          </p>
          <Link to={'/'}>
            <Button className="bg-primary"> Back to Home page !</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
