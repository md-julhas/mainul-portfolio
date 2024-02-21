import React from "react"

const Button = ({ text, bg }) => {
  return (
    <div
      className={` px-4 py-2 rounded-md mr-3 inline select-none box-shadow cursor-pointer text-gray-50`}
      style={{
        backgroundColor: bg,
      }}
    >
      {text}
    </div>
  )
}

export default Button
