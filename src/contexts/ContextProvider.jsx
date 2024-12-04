import { createContext, useContext, useState } from "react"

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [navColor, setNavColor] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const [showThemeSettings, setShowThemeSettings] = useState(false)
  const [menuIcons, setMenuIcons] = useState(true)
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor")
      : "#1FC35B"
  )
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )
  const [activeNav, setActiveNav] = useState("home")

  return (
    <StateContext.Provider
      value={{
        navColor,
        setNavColor,
        showScrollBtn,
        setShowScrollBtn,
        showThemeSettings,
        setShowThemeSettings,
        themeColor,
        setThemeColor,
        menuIcons,
        setMenuIcons,
        themeMode,
        setThemeMode,
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
