import React, { useState } from "react";
import Burgericon from "../icons/Burger";
import Close from "./Close";
import Shift from "../icons/Image15";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center p-4 sm:hidden">
      <div className="flex items-center space-x-4 ">
        <button
          className="w-6 h-6 mb-10"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <Close /> : <Burgericon />}
        </button>

        {isVisible && (
          <div className="absolute flex flex-col top-10 right-0 pl-40 mt-10 w-full dark:bg-black bg-white text-black dark:text-black h-[800px] p-4">
            <div className="flex w-full mb-4"></div>
            <button className="pr-96 dark:text-white text-black text-2xl">
              About
            </button>
            <button className="mr-96 dark:text-white text-black text-2xl">
              Work
            </button>
            <button className="mr-96 dark:text-white text-black text-2xl">
              Testimonials
            </button>
            <button className="mr-96 dark:text-white text-black text-2xl">
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="mr-96 dark:text-white text-black text-2xl w-[150px]  "
            >
              Switch theme
              {theme === "dark" ? <Sun /> : <Shift />}
            </button>

            <button className="px-4 dark:bg-white bg-customDark dark:text-black text-white rounded-lg h-10 text-2xl">
              Download CV
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
