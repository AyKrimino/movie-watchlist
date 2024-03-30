import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-zinc-700 h-20 flex items-center justify-between">
      <div className="ml-4">
        <a href="#" className="flex items-center justify-center">
          <img className="h-10 w-auto" src={logo} alt="movie watchlist logo" />
          <span className="ml-2 text-blue-400 hover:text-blue-500 md:text-lg sm:text-base text-sm font-bold">
            Movie Watchlist
          </span>
        </a>
      </div>
      <div className="text-gray-50 hover:text-gray-100 md:text-base sm:text-sm text-xs font-bold flex items-center justify-center">
        <a href="#" className="mr-3 text-blue-400">
          Home
        </a>
        <a href="#" className="mr-3 hover:text-blue-400">
          Movies
        </a>
        <a href="#" className="mr-2 hover:text-blue-400">
          Add movie
        </a>
      </div>
    </div>
  );
};

export default Navbar;
