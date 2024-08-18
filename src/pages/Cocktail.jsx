import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const navigate = useNavigate();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <h3 className="name mt-10">{name}</h3>
      </header>
      <div className="drink">
        <div className="flex justify-center items-center p-10">
          <img
            src={image}
            alt={name}
            className="max-w-xs max-h-xs object-contain"
          />
        </div>

        <div className="drink-info">
          <div className="ingredients pl-4">
            <p>
              <span className="drink-data">ingredients</span>
            </p>
            <div className="text-center">
              {" "}
              {/* ここでテキストを中央揃え */}
              {validIngredients.map((item) => (
                <span className="ing block" key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="instructions">
            <p>
              <span className="drink-data">instructions</span>
            </p>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
