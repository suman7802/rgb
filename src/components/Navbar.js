import React from "react";
import PropTypes from "prop-types";

const Navbar = ({option1, option2, option3, NavbarColor}) => {
  return (
    <div
      style={{
        backgroundColor: NavbarColor,
      }}
      className="section section1 border-2 border-black flex justify-between px-5 py-3">
      <ul className="flex flex-row space-x-10 text-xl  ">
        <li className="navOption ">{option1}</li>
        <li className="navOption">{option2}</li>
        <li className="navOption">{option3}</li>
      </ul>
      <div className="search flex flex-row">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          className="px-5 rounded-lg text-center outline-none "
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      </div>
    </div>
  );
};
Navbar.propTypes = {
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  NavbarColor: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  option1: "Home",
  option2: "About",
  option3: "Contact",
  NavbarColor: "rgba(158, 167, 242, 0.8)",
};
export default Navbar;
