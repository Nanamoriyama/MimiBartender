import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import heroimage from "../assets/hero.jpg";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import { useQuery } from "@tanstack/react-query";
import AboutUs from "../components/AboutUs";

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

  return (
    <div className="">
      <section className="">
        <div className="">
          <img
            src={heroimage}
            alt="../assets/hero.jpg"
            className="object-fill"
          />
          <span className="flex justify-center text-center mt-14 font-extralight mb-0">
            <div className="animate-pulse">
              <h1 className="background-animate font-light text-4xl bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 text-transparent text-center p-5 mb-4 leading-none text-gray-900 font-serif">
                Private Bartending Service
              </h1>
            </div>
          </span>
        </div>
      </section>
      <AboutUs />

      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
};
export default Landing;
