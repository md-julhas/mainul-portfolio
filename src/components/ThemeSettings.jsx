import React from "react"

import { IoMdClose } from "react-icons/io"
import { useStateContext } from "../contexts/ContextProvider"
import { Tooltip } from "@mui/material"

import { FaCheck } from "react-icons/fa"
import { themeColors } from "../constants/data"

const ThemeSettings = () => {
  const {
    themeColor,
    setThemeColor,
    setShowThemeSettings,
    themeMode,
    setThemeMode,
  } = useStateContext()

  return (
    <div
      className="fixed right-0 top-0 w-full bg-gray-800 h-screen bg-opacity-75 z-30"
      onClick={(e) => {
        if (
          !document.getElementById("theme-settings-content")?.contains(e.target)
        ) {
          setShowThemeSettings(false)
        }
      }}
    >
      <div
        id="theme-settings-content"
        className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 sm:w-72 w-52 float-right h-screen p-4 tracking-tight overflow-scroll"
      >
        <div className="flex items-center justify-between pb-5 border-b border-gray-300">
          <h3 className="text-2xl font-semibold">Theme Settings</h3>
          <Tooltip title="Close Theme Settings" arrow>
            <button onClick={() => setShowThemeSettings(false)}>
              <IoMdClose className={`text-xl float-right cursor-pointer `} />
            </button>
          </Tooltip>
        </div>

        <div className="mt-4 border-b border-gray-300 pb-4">
          <h3 className="font-semibold">Theme Options</h3>
          <div className="leading-9 ">
            <input
              type="checkbox"
              id="light"
              name="theme"
              value={"light"}
              checked={themeMode === "light"}
              onChange={() => setThemeMode("light")}
            />
            <label htmlFor="light" className="cursor-pointer pl-2">
              Light
            </label>
            <br />
            <input
              type="checkbox"
              id="dark"
              name="theme"
              value={"dark"}
              checked={themeMode === "dark"}
              onChange={() => setThemeMode("dark")}
            />
            <label htmlFor="dark" className="cursor-pointer pl-2">
              Dark
            </label>
            <br />
            <input
              type="checkbox"
              id="system"
              name="theme"
              value={"system"}
              checked={themeMode === "system"}
              onChange={() => setThemeMode("system")}
            />
            <label htmlFor="system" className="cursor-pointer pl-2">
              System Default
            </label>
          </div>
        </div>

        <div className="mt-4 border-b border-gray-300 pb-7">
          <h3 className="font-semibold">Theme Color</h3>

          <div className="flex gap-2 flex-wrap mt-4">
            {themeColors.map((color) => (
              <div
                key={color}
                className={`h-8 w-14 flex items-center justify-center cursor-pointer text-gray-100`}
                style={{ backgroundColor: color }}
                onClick={() => {
                  setThemeColor(color)
                  localStorage.setItem("themeColor", color)
                }}
              >
                {themeColor === color && <FaCheck />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="px-4 py-2 hover:text-gray-200 bg-gray-400 hover:bg-gray-500 w-full"
            onClick={() => {
              localStorage.clear()
              setThemeColor("#1FC35B")
              setThemeMode("system")
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
