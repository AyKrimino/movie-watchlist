import facebookLogo from "../assets/images/facebookLogo.png";
import instagramLogo from "../assets/images/instagramLogo.png";
import linkedinLogo from "../assets/images/linkedinLogo.png";

const Footer = () => {
  return (
    <div className="h-20 bg-zinc-700 mt-4 flex justify-around items-center">
      <div className="">
        <span className="text-gray-50 md:text-base sm:text-sm text-xs font-bold ml-4">
          Copyright &copy; WatchList {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className=" bg-zinc-800 hover:bg-zinc-900 cursor-pointer rounded-full p-2 w-fit mr-3">
          <a href="#">
            <img
              className="h-6 w-auto"
              src={facebookLogo}
              alt="facebook logo"
            />
          </a>
        </div>
        <div className=" bg-zinc-800 hover:bg-zinc-900 cursor-pointer rounded-full p-2 w-fit mr-3">
          <a href="#">
            <img
              className="h-6 w-auto"
              src={instagramLogo}
              alt="instagram logo"
            />
          </a>
        </div>
        <div className=" bg-zinc-800 hover:bg-zinc-900 cursor-pointer rounded-full p-2 w-fit mr-4">
          <a href="#">
            <img
              className="h-6 w-auto"
              src={linkedinLogo}
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
