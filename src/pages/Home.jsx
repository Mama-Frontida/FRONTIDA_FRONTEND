import { Button } from "flowbite-react";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col md:flex-row w-10/12 h-full items-center justify-center gap-10 md:gap-0">
      <div className="flex flex-col items-center md:items-start gap-10 w-11/12 md:w-1/2 pt-10 md:pt-0">
        <h1 className="text-3xl text-center md:text-start md:text-3xl lg:text-7xl">
          Your New Trusted <i className="text-white">Mental Healthcare</i> Provider .
        </h1>
        <p className="text-xs text-center md:text-start md:text-sm lg:text-xl text-gray-800">
          Introducing the next generation medical services at the comfort of your phone.  Engage with our model and let us beat postpartum depression together.
        </p>
        <Link to={'/chat'}><Button color="dark" pill className="w-fit px-7">Get Started</Button></Link>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src="/images/Mother.png" className="w-full h-[40vh] md:h-fit object-top object-cover" alt="" />
      </div>
    </section>
  );
}

export default Home;
