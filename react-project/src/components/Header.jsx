import { Link } from "react-router-dom";
import magGlass from "../assets/glass.png";
import user from "../assets/user.png";
import carretUp from "../assets/carret_up.png";
import carretDown from "../assets/carret_down.png";
import hamburger from "../assets/hamburger.png";

import { useState } from "react";

{
  /* <Link to="/">Homepage</Link>
<Link to="/watchlist">Watchlist</Link> */
}

function responsiveSearch() {}

export default function Header() {
  const [responsiveSearch, setResposiveSearch] = useState(false);
  return (
    <nav className="relative flex flex-row justify-center gap-4 bg-stone-800 py-4 text-white">
      <button className="font-logo bg-royal-blue px-2 py-1 rounded-md">
        MovieNexus
      </button>
      <div className="flex gap-1">
        <img src={hamburger} className="h-6 w-6 mt-2" />
        <button className="hidden md:block">Menu</button>
      </div>
      <div className=" relative flex justify-items-center text-center">
        <input
          className="rounded-md pl-3  hidden lg:w-[600px] md:w-[400px] lg:inline md:inline  "
          placeholder="Search MovieNexus"
        ></input>
        <button className="absolute right-2 top-2">
          <img src={magGlass} className="h-6 w-6  " />
        </button>
        {/* <button>
          <img src={magGlass} className="ml-2 h-6 w-6 md:hidden" />
        </button> */}
      </div>
      <button>
        <img src={magGlass} className="ml-2 h-6 w-6 md:hidden" />
      </button>

      <button className="hidden md:block">
        Nexus<span className="text-royal-blue">Pro</span>
      </button>
      <button className="hidden  md:inline">
        Watchlist
        <span className=" bg-royal-blue rounded-md ml-2 px-1">103</span>
      </button>
      <div className="flex flex-col justify-center text-center">
        <button
          className="hover:bg-stone-700 px-2 py-2 rounded-sm"
          onClick={() => {
            setResposiveSearch((prev) => !prev);
          }}
        >
          <div className="flex gap-2">
            <img src={user} className="w-6 h-6" />
            <p>John</p>
            {!responsiveSearch ? (
              <img src={carretDown} className="w-4 h-4 mt-1.5" />
            ) : (
              <img src={carretUp} className="w-4 h-4 mt-1.5" />
            )}
          </div>
        </button>
        {responsiveSearch ? (
          <ul className="absolute  mt-36 bg-stone-700 px-2.5 py-2 rounded-sm ">
            <li>Watchlist</li>
            <li>Your profile</li>
            <li>Your ratings</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
