import { FaStar } from "react-icons/fa";
import TheShawshankRedemption from "../assets/images/movies/TheShawshankRedemption.png";

const MovieListing = () => {
  return (
    <div className="bg-zinc-700 m-2 rounded-lg border-2 border-zinc-500 shadow-md md:flex">
      <div className="flex justify-center mt-2 md:m-2">
        <img
          className="h-60 w-48 shadow-md md:h-72 md:w-56"
          src={TheShawshankRedemption}
          alt="Movie image"
        />
      </div>
      <div className="ml-3 mb-3">
        <div className="mt-2">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-blue-400">
            The Shawshank Redemption
          </span>
        </div>
        <div className="mt-2">
          <span className="text-sm md:text-base lg:text-lg font-light text-gray-50">
            Two imprisoned men bond over a number of years, finding solace and
            eventual redemption through acts of common decency.
          </span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-50 font-light text-sm md:text-base lg:text-lg">
            Rating: 9.3
          </span>
          <div className="text-yellow-300 ml-1 md:text-xl">
            <FaStar />
          </div>
        </div>
        <div className="mt-2 mb-2">
          <button className="bg-blue-400 px-3 py-1 rounded-lg text-blue-50 hover:bg-blue-500">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
