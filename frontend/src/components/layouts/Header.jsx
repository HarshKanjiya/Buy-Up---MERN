import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="border-b py-3 flex align-middle justify-between backdrop-blur sticky ">
      <div className=" ml-8 ">
        <MenuIcon className=" " />
      </div>
      <div className=" left-1/2 pl-[calc(5rem)] " >
        <img className=" h-7 w-7  " src={logo} alt="Buy Up" />        
      </div>
      <div className=" flex align-middle justify-center mr-8  gap-4 text-gray-500 ">
        <Link to="/">
          <SearchIcon style={{ height:"1.3rem" }} />
        </Link>
        <Link to="/">
          <AccountCircleIcon style={{ height:"1.3rem" }} />
        </Link>
        <Link to="/">
          <LocalMallIcon style={{ height:"1.3rem" }} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
