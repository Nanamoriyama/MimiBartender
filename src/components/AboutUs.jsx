import React from "react";
import { NavLink } from "react-router-dom";
import martini from "../assets/hero2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="w-full text-bold leading-9 p-18 mt-20 font-serif text-center grid md:grid-cols-2 items-center xl:leading-10">
        <div className="text-stone-300 md:max-w-md mx-auto text-center">
          <h3 className="py-8 mt-0 text-xl md:text-3xl">What we offer</h3>
          <p className="text-base p-10 md:text-xl md:p-6">
            Bartending Mimi33 offers a mobile bartending service based in the
            Netherlands. <br />
            <br />
            We provide bartending services for private and public events. The
            bartender is skilled in mixology, capable of expertly crafting
            classic cocktails or crafting delightful, innovative taste to your
            liking.
            <br />
            <br />
            <span>
              More about the bartender
              <NavLink
                to="/about"
                className="cursor-pointer font-base text-orange-400 border border-stone-300 p-2 m-2"
              >
                Here
              </NavLink>
            </span>
          </p>
        </div>

        <div className="md:flex items-center justify-center">
          <img
            src={martini}
            className="max-w-full max-h-96 object-cover mx-auto"
            alt="Martini"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
