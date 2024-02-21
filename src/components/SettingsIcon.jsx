import { CiSettings } from "react-icons/ci"
import { useStateContext } from "../contexts/ContextProvider"
import { Tooltip } from "@mui/material"
import { useState } from "react"
const SettingsIcon = () => {
  const { setShowThemeSettings, themeColor } = useStateContext()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e) => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="flex items-center cursor-pointer pl-3">
      <Tooltip title="Theme Settings" arrow>
        <button onClick={() => setShowThemeSettings(true)} type="button">
          <CiSettings
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              fontSize: "2rem",
              color: isHovered ? themeColor : "",
            }}
          />
        </button>
      </Tooltip>
    </div>
  )
}

export default SettingsIcon
