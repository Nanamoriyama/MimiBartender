import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import mimi33logo from "../assets/mimilogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-stone-300 nav-center flex justify-between items-center p-4 relative">
      <NavLink to="/" className="nav-link">
        <img
          className="h-16 w-16 my-0 object-cover"
          src={mimi33logo}
          alt="logo"
        />
      </NavLink>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer text-white z-50"
        onClick={toggleMenu}
        style={{ position: "relative", zIndex: 50 }}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <div className="hidden mr-2 md:flex nav-links">
        <NavLink
          to="/"
          className="nav-link mr-2 pr-2 pl-2 text-lg hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link mr-2 pr-2 pl-2 text-lg hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/photo"
          className="nav-link mr-2 pr-2 pl-2 text-lg hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          Photo
        </NavLink>
        <NavLink
          to="/newsletter"
          className="nav-link pr-2 pl-2 mr-2 text-lg hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-300 transform translate-y-0 z-40"
            : "fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-300 transform -translate-y-full z-40"
        } md:hidden`}
      >
        <NavLink
          to="/"
          className="nav-link py-4 text-2xl hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link py-4 text-2xl hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/photo"
          className="nav-link py-4 text-2xl hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          Photo
        </NavLink>
        <NavLink
          to="/newsletter"
          className="nav-link py-4 text-2xl hover:text-pink-500"
          style={{
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationColor = "pink";
            e.target.style.textUnderlineOffset = "4px";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
