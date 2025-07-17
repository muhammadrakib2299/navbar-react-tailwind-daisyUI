import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";
import Link from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-sky-300">
      <div>
        {/* Menu Toggle Icon */}
        <div className="md:hidden p-5" onClick={() => setOpen(!open)}>
          {open === true ? (
            <span className="text-3xl">
              <CgCloseR />
            </span>
          ) : (
            <span className="text-3xl">
              <RiMenu2Line />
            </span>
          )}
        </div>

        {/* Menu item */}
        <ul
          className={`md:flex absolute bg-sky-300 md:static justify-end p-5 duration-100 ${
            open ? "top-17" : "-left-250"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
