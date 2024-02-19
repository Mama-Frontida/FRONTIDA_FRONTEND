import { Button } from "flowbite-react";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-row w-10/12 h-full items-center justify-center">
      <div className="flex flex-col gap-10 w-1/2">
        <h1 className="text-7xl">
          Your New Trusted <i className="text-white">Mental Healthcare</i> Provider .
        </h1>
        <p className="text-xl text-gray-800">
          Introducing the next generation medical services at the comfort of your phone.  Engage with our model and let us beat postpartum depression together.
        </p>
        <Link to={'/shatt'}><Button color="dark" pill className="w-fit px-7">Get Started</Button></Link>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src="/images/Mother.png" alt="" />
      </div>
    </section>
  );
}

export default Home;
