import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import AboutUs from "../components/AboutUs";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  const [textClass, setTextClass] = useState("parallax-text");

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector(".parallax");
      const scrollPosition = window.pageYOffset;

      // Parallax zoom effect
      parallaxElement.style.transform = `scale(${1 + scrollPosition * 0.0005})`;

      // Change text opacity and position based on scroll position
      if (scrollPosition > 150) {
        setTextClass("parallax-text hidden-text");
      } else {
        setTextClass("parallax-text");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-stone-800 overflow-x-hidden">
      <section className="parallax relative">
        <div className="flex justify-center text-center absolute inset-0 flex-col items-center">
          <h1 className={textClass}>Private Bartending Service</h1>
        </div>
      </section>
      <AboutUs />
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
