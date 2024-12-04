import React, { useState } from "react"

import { useStateContext } from "../contexts/ContextProvider"

const HobbiesCard = ({ icon, title }) => {
  const { themeColor } = useStateContext()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`px-5 py-3 flex items-center gap-4 capitalize box-shadow bg-gray-300 dark:bg-darkModeThird dark:text-gray-300`}
      onMouseEnter={() => setIsHovered(title)}
      onMouseLeave={() => setIsHovered(null)}
      style={{
        color: isHovered === title && themeColor,
      }}
    >
      {icon}
      {title}
    </div>
  )
}

export default HobbiesCard
