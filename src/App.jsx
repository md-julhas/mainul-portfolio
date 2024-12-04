import React, { useEffect, useState } from "react"

import "./App.css"
import {
  Contact,
  Footer,
  Hero,
  MyIntro,
  Navbar,
  Portfolio,
  Services,
} from "./components"
import styles from "./style"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import ThemeSettings from "./components/ThemeSettings"
import { useStateContext } from "./contexts/ContextProvider"
import { Tooltip } from "@mui/material"
import { navLinks } from "./constants/data"

const App = () => {
  const [isHovered, setIsHovered] = useState(false)
  const {
    navColor,
    setNavColor,
    showScrollBtn,
    setShowScrollBtn,
    showThemeSettings,
    themeColor,
    themeMode,
    setActiveNav,
  } = useStateContext()

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavColor(true)
      } else {
        setNavColor(false)
      }

      if (window.scrollY > 100) {
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const onWindowMath = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }
  onWindowMath()

  useEffect(() => {
    if (themeMode === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else if (themeMode === "light") {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else if (themeMode === "system") {
      localStorage.removeItem("theme")
      darkQuery.matches
        ? element.classList.add("dark")
        : element.classList.remove("dark")
    }
  }, [themeMode])

  // Active nav items by scroll page
  useEffect(() => {
    const hanldeWindowScroll = () => {
      const navbarHeight = document.getElementById("nav-bar").offsetHeight
      const scrollPosition = window.scrollY + navbarHeight

      for (const nav of navLinks) {
        const elements = document.getElementsByClassName(nav.id)
        if (elements.length > 0) {
          const { offsetTop, offsetHeight } = elements[0]
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(nav.id)
            break
          } else {
            setActiveNav("home")
          }
        }
      }
    }
    window.addEventListener("scroll", hanldeWindowScroll)
    return () => window.removeEventListener("scroll", hanldeWindowScroll)
  }, [])

  return (
    <div className={`w-full dark:bg-darkModePrimary`}>
      {/* Hero and navbar container */}
      <div className="sm:h-[800px] w-full dark:bg-[url(./assets/dark-hero-background.jpg)] bg-[url(./assets/hero-background.jpg)] bg-cover">
        <div
          className={` dark: fixed w-full z-30 ${styles.flexCenter} ${
            styles.paddingX
          }
          ${
            navColor
              ? "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 box-shadow-navabr"
              : "text-gray-200"
          }
          `}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Hero />
      </div>

      {/* Scroll top */}
      {showScrollBtn && (
        <Tooltip title="Go to Top" arrow>
          <button
            type="button"
            className="fixed flex justify-center items-center h-7 w-7 right-2 bottom-2 box-shadow rounded-md bg-gray-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: isHovered && themeColor }}
            onClick={goToTop}
          >
            <MdOutlineKeyboardArrowUp className={`text-sm text-gray-200`} />
          </button>
        </Tooltip>
      )}

      {showThemeSettings && <ThemeSettings />}
      <MyIntro />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
