import React from "react";
import { NavLink } from "react-router-dom";
import martini from "../assets/hero2.jpg";
const AboutUs = () => {
  return (
    <div className="">
      <div className="w-full h-70 bg-stone-300 text-bold leading-9 px-6 py-6 font-serif text-center grid md:grid-cols-2 items-center xl:leading-10">
        <div>
          <h3 className="py-10 mt-0">What we offer</h3>
          <p className="">
            Bartending Mimi33 offers a mobile bartending service based in the
            Netherlands. <br />
            We provide bartending services for private and public events. The
            bartender is skilled bartenders in mixology, capable of expertly
            crafting classic cocktails or crafting delightful, innovative taste
            to your liking.
            <br />
            <span className="">
              More about the bartender
              <NavLink
                to="/about"
                className="cursor-pointer font-bold text-orange-400 px-1"
              >
                Here
              </NavLink>
            </span>
          </p>
        </div>
        <div className="md:flex items-center">
          <img
            src={martini}
            className="h-62 w-54 flex display-block py-6 m-auto md:items-center lg:flex items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
