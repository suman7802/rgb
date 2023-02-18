import React from "react";

const Navbar = ({NavbarColor, options}) => {
  return (
    <div
      style={{
        backgroundColor: NavbarColor,
      }}
      className="section section1 border-2 border-black flex justify-between px-5 py-3">
      <ul className="flex flex-row space-x-10 text-xl  ">
        {options.map((option, i) => {
          return (
            <li key={i} className="navOption">
              {" "}
              <a href={`/${option.link}`}>{option.text}</a>
            </li>
          );
        })}
      </ul>
      <div className="search flex flex-row">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          className="px-5 rounded-lg text-center outline-none "
        />
      </div>
    </div>
  );
};
export default Navbar;
