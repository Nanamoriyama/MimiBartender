import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const [search, setSearch] = useState(searchTerm || "");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector(
        ".parallax-container::before"
      );
      const scrollPosition = window.pageYOffset;

      // Apply zoom effect to the pseudo-element (background image only)
      if (parallaxElement) {
        parallaxElement.style.transform = `scale(${
          1 + scrollPosition * 0.0005
        })`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
    // Scroll adjustment

    setTimeout(() => {
      document
        .getElementById("search-form")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const text = "What would you like to drink?";

  return (
    <div className="parallax-container">
      <div className="form-container">
        <div className="wavy-text">
          {text.split("").map((char, index) => (
            <span key={index} style={{ "--i": index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <form
          id="search-form"
          className="form flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full mb-2">
            <input
              type="search"
              name="search"
              className="w-full h-12 rounded-full pl-10 pr-4 border border-gray-200 focus:outline-none focus:border-indigo-500 placeholder-stone-200 shadow-md placeholder-gray-500 focus:placeholder-indigo-500 bg-transparent text-white"
              placeholder="Type your drink..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute left-0 top-0 flex items-center justify-center h-full w-10">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
                ></path>
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="border border-transparent text-white p-4 px-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-400 hover:to-indigo-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
