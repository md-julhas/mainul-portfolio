import React, { useState } from "react"

import styles from "../style"
import { portfilioData } from "../constants/data"
import { IoImage } from "react-icons/io5"
import { IoCloseSharp } from "react-icons/io5"

const Porfolio = () => {
  const [isModal, setIsModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageTitle, setImageTitle] = useState(null)

  return (
    <div
      className={`bg-gray-100 py-16 dark:bg-darkModeSecondary portfolio ${styles.paddingX} ${styles.flexCenter} select-none`}
    >
      <div className={`${styles.boxWidth}`}>
        <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold text-center pb-8">
          MY PORTFOLIO
        </h3>

        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          {portfilioData.map((item) => (
            <div key={item.title} className="relative group">
              <img
                src={item.img}
                alt={item.title}
                style={{ height: "300px" }}
              />
              <div className="bg-gray-800 inset-0 absolute flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500">
                <button
                  className={`bg-gray-500 hover:text-gray-100 hover:bg-gray-400 text-gray-200 rounded-md p-2 w-fit cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  onClick={() => {
                    setIsModal(true)
                    setSelectedImage(item.img)
                    setImageTitle(item.title)
                  }}
                >
                  <IoImage className="text-4xl" />
                </button>
              </div>
              <p className="p-4 bg-gray-200 dark:bg-darkModeThird dark:text-gray-300 text-center">
                {item.title}
              </p>
            </div>
          ))}

          {/* Image View */}
          {isModal && (
            <div
              className={`fixed right-0 top-0 bg-gray-800 bg-opacity-75 h-screen w-full z-50`}
              onClick={(e) => {
                if (
                  !document.getElementById("view-image-tag").contains(e.target)
                ) {
                  setIsModal(false)
                }
              }}
            >
              <button
                className="fixed right-4 top-4 text-2xl text-gray-300 hover:text-gray-50"
                onClick={() => setIsModal(false)}
              >
                <IoCloseSharp />
              </button>
              <div className="flex justify-center items-center h-screen">
                <img src={selectedImage} alt={imageTitle} id="view-image-tag" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Porfolio
