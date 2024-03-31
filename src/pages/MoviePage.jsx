import { FaStar } from "react-icons/fa";
import TheGodfather from "../assets/images/movies/TheGodfather.png";

const MoviePage = () => {
  return (
    <div className="">
      <div className="bg-zinc-700 flex justify-center items-center py-4 m-2 md:py-6 rounded-lg border-2 border-zinc-500">
        <span className="text-2xl md:text-3xl font-bold text-blue-400 shadow-sm">
          The Godfather (<span className="text-blue-200">1972</span>)
        </span>
      </div>
      <div className="md:flex md:items-center md:ml-2">
        <div className="md:ml-0 mb-2 md:mr-4 flex justify-center items-center">
          <img
            className="max-h-96 max-w-72 shadow-md select-none"
            src={TheGodfather}
            alt="The Godfather Movie image"
          />
        </div>
        <div className="mx-2 my-4 md:w-full">
          <table class="w-full shadow-md rounded-lg overflow-hidden">
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Title
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                The Shawshank Redemption
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Year
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                1994
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Genre
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                Drama
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Director
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                Frank Darabont
              </td>
            </tr>
            <tr>
              <td class="border border-zinc-400 px-4 py-2 text-zinc-400 font-bold text-base md:text-lg">
                Cast
              </td>
              <td class="border border-zinc-400 px-4 py-2 text-blue-200 text-sm md:text-base">
                Tim Robbins, Morgan Freeman, Bob Gunton
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 border-zinc-400 text-zinc-400 font-bold text-base md:text-lg">
                Rating
              </td>
              <td class="border px-4 py-2 border-zinc-400 text-blue-200 text-sm md:text-base">
                9.3
                <div className="text-yellow-300 inline-block ml-1 md:text-xl">
                  <FaStar />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-zinc-700 mx-2 mb-4 px-2 md:px-4 py-3 md:py-4 rounded-lg border-2 border-zinc-500">
        <div className="mb-1">
          <span className="text-2xl md:text-3xl capitalize font-bold text-blue-400">
            Story of The Godfather
          </span>
        </div>
        <div className="text-justify">
          <span className="text-base md:text-lg tracking-tight md:tracking-wider text-blue-200">
            The aging patriarch of an organized crime dynasty transfers control
            of his clandestine empire to his reluctant son.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
