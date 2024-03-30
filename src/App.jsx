import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieListings from "./components/MovieListings";
import FavoriteMoviesSection from "./components/FavoriteMoviesSection";

const App = () => {
  return (
    <>
      <Navbar />
      <FavoriteMoviesSection />
      <MovieListings />
      <Footer />
    </>
  );
};

export default App;
