import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <article className="bg-white shadow-lg transition-shadow duration-300 ease-in-out grid grid-rows-[auto_1fr] rounded-lg hover:shadow-xl">
      {/* Image Section */}
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover rounded-t-lg sm:h-48 md:h-60"
        />
      </div>

      {/* Footer Section */}
      <div className="p-6 text-center flex flex-col items-center justify-center">
        <h4 className="text-lg font-bold text-gray-800 mb-2">{name}</h4>
        <h5 className="text-md font-medium text-gray-600 mb-2">{glass}</h5>
        <p className="text-gray-400 mb-4">{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className="border border-transparent text-white p-4 px-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-400 hover:to-indigo-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          details
        </Link>
      </div>
    </article>
  );
};

CocktailCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
};

export default CocktailCard;
