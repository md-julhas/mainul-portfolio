import React from "react"
import mainul from "../assets/hero.png"
import { BorderButton, Button } from "./index"
import { useStateContext } from "../contexts/ContextProvider"

const Hero = () => {
  const { themeColor } = useStateContext()

  return (
    <div className="bg-gray-950 bg-opacity-75 px-2 h-[900px] sm:h-[800px] pt-16 flex flex-col content-center justify-center items-center text-white home">
      <img
        src={mainul}
        alt="picture of mainul"
        className="h-[300px] rounded-full bg-gray-400 dark:bg-darkModeThird"
      />
      <h1
        className="text-xl sm:text-4xl sm:font-semibold text-center w-8/12 py-10"
        style={{ lineHeight: 1.5 }}
      >
        "Hello there! I'm Mohiuddin Mainul, an expert in data entry and B2B lead
        generation services"
      </h1>
      <div className="hidden sm:flex">
        <Button text={"Hire Me"} bg={themeColor} />
        <BorderButton text={"Download CV"} hoverBg={themeColor} />
      </div>
      <div className="flex flex-col items-center gap-y-4 sm:hidden ">
        <Button text={"Hire Me"} bg={themeColor} />
        <BorderButton text={"Download CV"} hoverBg={themeColor} />
      </div>
    </div>
  )
}

export default Hero
