import React, { useState } from "react"

import { useStateContext } from "../contexts/ContextProvider"
import { MdOutlineFileDownload } from "react-icons/md"

const BorderButton = ({ text, hoverBg }) => {
  const { themeColor } = useStateContext()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={` px-4 py-2 rounded-md mr-3 select-none box-shadow cursor-pointer flex items-center gap-2`}
      style={{
        backgroundColor: isHovered ? themeColor : "",
        border: `1px solid ${themeColor}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <MdOutlineFileDownload className="text-xl" />
    </div>
  )
}

export default BorderButton
