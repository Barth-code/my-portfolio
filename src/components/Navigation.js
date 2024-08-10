import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <NavLink to="/">
        <img src="./logo.webp" alt="Ayena" className="h-8" />
      </NavLink>
      <div className="text-xl cursor-pointer md:hidden" onClick={toggleMenu}>
        ☰
      </div>
      <ul
        ref={menuRef}
        className={`absolute top-16 right-0 w-full md:static md:flex md:space-x-4 bg-gray-800 md:bg-transparent transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0`}
      >
        <NavLink
          to="/"
          className={(nav) =>
            `block px-4 py-2 md:py-0 hover:text-gray-400 ${
              nav.isActive ? "text-yellow-500" : ""
            }`
          }
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/compétences"
          className={(nav) =>
            `block px-4 py-2 md:py-0 hover:text-gray-400 ${
              nav.isActive ? "text-yellow-500" : ""
            }`
          }
        >
          <li>Compétences</li>
        </NavLink>
        <NavLink
          to="/projets"
          className={(nav) =>
            `block px-4 py-2 md:py-0 hover:text-gray-400 ${
              nav.isActive ? "text-yellow-500" : ""
            }`
          }
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) =>
            `block px-4 py-2 md:py-0 hover:text-gray-400 ${
              nav.isActive ? "text-yellow-500" : ""
            }`
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
