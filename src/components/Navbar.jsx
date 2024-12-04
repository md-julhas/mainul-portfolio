import React from "react"

import { IoMenu } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"
import { useStateContext } from "../contexts/ContextProvider"
import { SettingsIcon } from "./index"
import { navLinks } from "../constants/data"

const Navbar = () => {
  const { menuIcons, setMenuIcons, themeColor, activeNav } = useStateContext()

  const onClikcScrollPage = (nav) => {
    const element = document.getElementsByClassName(nav)[0]
    const navbarHeight = document.getElementById("nav-bar").offsetHeight

    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <span
        className={`font-extrabold text-2xl tracking-tight font-kodeMono`}
        style={{ color: themeColor }}
      >
        Mainul
      </span>

      {/* Navbar of large screen */}
      <ul className="list-none hidden sm:flex ">
        {navLinks.map((nav) => (
          <li id="nav-bar" key={nav.id} className={`p-4`}>
            <a
              href={`#${nav.id}`}
              onClick={() => onClikcScrollPage(nav.id)}
              className={`${
                activeNav === nav.id ? "text-rose-500" : ""
              } hover:text-rose-500`}
            >
              {nav.title}
            </a>
          </li>
        ))}
        <SettingsIcon />
      </ul>

      {/* Navbar of mobile screen */}
      <div className=" sm:hidden flex gap-3">
        <SettingsIcon />
        <button
          type="button"
          className="text-2xl p-2"
          onClick={() => setMenuIcons(!menuIcons)}
        >
          {menuIcons ? <IoMenu /> : <IoMdClose />}
        </button>

        {!menuIcons && (
          <div className="h-fit bg-gray-200 p-4 text-gray-700 rounded-md fixed right-4 top-[60px] text-sm mobile-nav-slide-top">
            <ul className="list-none">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="py-1"
                  style={{ color: activeNav === nav.id ? "#EC6398" : "" }}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={() => onClikcScrollPage(nav.id)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
