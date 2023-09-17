import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import 'tailwindcss/tailwind.css';
const Header = () => {
  const onLineStatus = useOnlineStatus();
  const [login, setLogin] = useState("Login");
  const [button_design, setButtonDesign] = useState({
    "background-color": "red",
  });
  return (
    <div className="bg-white-100 text-white p-4 flex justify-between shadow-xl mx-4 my-4 mb-2 sm:bg-white-50">
      <div className="logo-container">
        <img className="w-40 mx-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3 text-black">
            {onLineStatus ? "Online: 🟢" : "Offline: 🔴"}
          </li>
          <li className="px-3 text-black">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 text-black">
            <Link to="contact">ContactUS</Link>
          </li>
          <li className="px-3 text-black">
            <Link to="contact">AboutUS</Link>
          </li>
          <li className="px-3 text-black ">
            <Link to="Cart">Cart </Link>
          </li>

          <button
            className="login"
            style={button_design}
            onClick={() => {
              if (login == "Login") {
                setButtonDesign({ "background-color": "green" });
                setLogin("Logout");
              } else {
                setButtonDesign({ "background-color": "red" });
                setLogin("Login");
              }
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
