import { Link } from "react-router-dom";
import magGlass from "../assets/glass.png";
import user from "../assets/user.png";
import carretUp from "../assets/carret_up.png";
import carretDown from "../assets/carret_down.png";
import hamburger from "../assets/hamburger.png";
import MenuNavigation from "./MenuNavigation";

import { useState } from "react";

{
  /* <Link to="/">Homepage</Link>
<Link to="/watchlist">Watchlist</Link> */
}

function responsiveSearch() {}

export default function Header() {
  const [responsiveSearch, setResposiveSearch] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const caretStyle = "hidden w-4 h-4 mt-1.5 md:inline";
  return (
   <>
    <nav className="relative flex flex-row justify-between md:justify-center gap-4 bg-stone-800 py-4 text-white">
      <div className="flex gap-2 flex-row-reverse md:flex-row ml-3">
        <div>
          <button className="font-logo bg-royal-blue px-2 py-1 mt-1 rounded-md">
            MovieNexus
          </button>
        </div>

        <div>
          <button className="flex gap-1" onClick={()=>{
            setHamburgerMenu((prev) => !prev)
          }}>
            <img src={hamburger} className="h-6 w-6 mt-2" />
            <p className="hidden md:block mt-2">Menu</p>
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-2 mr-3">
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

      <button className="hidden lg:block">
        Nexus<span className="text-royal-blue">Pro</span>
      </button>
      <button className="hidden  lg:inline">
        Watchlist
        <span className=" bg-royal-blue rounded-md ml-2 px-1">103</span>
      </button>
      <div className="flex flex-col justify-center text-center">
        <button
          className="hover:bg-stone-700 px-2 py-2 rounded-full md:rounded-sm"
          onClick={() => {
            setResposiveSearch((prev) => !prev);
          }}
        >
          <div className="flex gap-2">
            <img src={user} className="w-6 h-6" />
            <p className="hidden md:inline">John</p>
            {!responsiveSearch ? (
              <img src={carretDown} className={caretStyle} />
            ) : (
              <img src={carretUp} className={caretStyle} />
            )}
          </div>
        </button>
        {responsiveSearch ? 
          <ul className="absolute  mt-40 md:mt-36 lg:mt-36 bg-stone-700 px-2.5 py-2 rounded-sm ">
            <li className="md:hidden border-b-2 border-white">John</li>
            <li>Watchlist</li>
            <li>Your profile</li>
            <li>Your ratings</li>
          </ul>
        : ""}
      </div>

      </div>

      
    </nav>
    <MenuNavigation  open={hamburgerMenu} closeFunc={setHamburgerMenu}/>
    </>
  );
}
