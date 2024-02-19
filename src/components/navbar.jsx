import { useContext } from "react";
import { GiAstronautHelmet, GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/AppContexts";
import { Avatar, Button } from "flowbite-react";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const { userData, logout } = useContext(AppContext)
  return (
    <nav
      className={`w-full ${path == "/chat" ? "hidden" : "flex"
        } flex-row bg-primary py-4  justify-between px-10 items-center rounded-t-md`}
    >
      <div className="lg:w-2/12 md:w-4/12 w-1/2">
        <a href="/">
          <img
            src="/images/logo_blue.png"
            className="w-full h-[6vh] object-left object-contain  "
            alt=""
          />
        </a>
      </div>

      <div className="flex flex-row">
        {userData && <Avatar rounded size={'md'} >
          <div className="space-y-1 font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-100 ">Joined in August 2014</div>
          </div>
        </Avatar>}

        {!userData && <div className="flex flex-row gap-4">
          <Link to={'/auth'}>
            <Button pill className="border-none px-4" color="light">Sign In</Button>
          </Link>
          <Link to={'/auth'}>
            <Button pill color="dark"  >Create An Account</Button>
          </Link>

        </div>}

      </div>


    </nav>
  );
}

export default Navbar;
