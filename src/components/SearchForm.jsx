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
          <input
            type="search"
            name="search"
            className="form-input mb-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn">
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
