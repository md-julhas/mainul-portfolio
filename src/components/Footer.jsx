import React, { useState } from "react"

import styles from "../style"
import { socialIcons } from "../constants/data"
import { useStateContext } from "../contexts/ContextProvider"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
  const [isHovered, setIsHovered] = useState(null)
  const { themeColor } = useStateContext()
  return (
    <div
      className={`bg-darkModeSecondary footer ${styles.paddingX} text-gray-300 flex flex-col justify-center items-center gap-7`}
    >
      <h3 className="text-2xl font-semibold text-center pt-10 pb-2">
        Mohiuddin Mainul
      </h3>
      <p className="text-sm text-center">
        Efficient data entry solutions tailored for your needs. Elevate your
        business with accuracy and speed
      </p>
      <div className="flex gap-3">
        {socialIcons.map((icon, index) => (
          <button
            key={index}
            className="text-xl p-2 border border-gray-500 rounded-md transition-all duration-500"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            style={{
              backgroundColor: isHovered === index && themeColor,
              border: isHovered === index && `1px solid ${themeColor}`,
            }}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="flex items-center mt-6 justify-center gap-2 text-sm border-t border-gray-600 w-full p-5">
        <AiOutlineCopyrightCircle />
        <p className="">
          {new Date().getFullYear()} Mohiuddin Mainul. Developed by{" "}
          <button style={{ color: themeColor }}>Md Julhas</button>
        </p>
      </div>
    </div>
  )
}

export default Footer
