import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const [search, setSearch] = useState(searchTerm || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
    // ここでスクロール位置を調整
    setTimeout(() => {
      document
        .getElementById("search-form")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <form
      id="search-form"
      className="form flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div className="text-white mb-2 whitespace-nowrap">
        What would you like to drink?
      </div>
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
  );
};

export default SearchForm;
