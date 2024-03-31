import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-zinc-700 h-20 flex items-center justify-between">
      <div className="ml-4 sm:ml-12">
        <Link to="/" className="flex items-center justify-center">
          <img
            className="h-10 w-auto select-none"
            src={logo}
            alt="movie watchlist logo"
          />
          <span className="ml-2 text-blue-400 hover:text-blue-500 md:text-lg sm:text-base text-sm font-bold">
            Movie Watchlist
          </span>
        </Link>
      </div>
      <div className="text-gray-50 sm:mr-10 hover:text-gray-100 md:text-base sm:text-sm text-xs font-bold flex items-center justify-center">
        <Link to="/" className="mr-3 text-blue-400">
          Home
        </Link>
        <Link to="/movies" className="mr-3 hover:text-blue-400">
          Movies
        </Link>
        <Link to="/add-movie" className="mr-2 hover:text-blue-400">
          Add movie
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
