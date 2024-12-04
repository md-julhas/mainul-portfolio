import React, { useState } from "react"
import styles from "../style"
import { servicesData } from "../constants/data"
import { useStateContext } from "../contexts/ContextProvider"

const Services = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { themeColor } = useStateContext()

  return (
    <div
      className={`w-full bg-gray-50 dark:bg-darkModePrimary py-16 services ${styles.paddingX} ${styles.flexCenter} select-none`}
    >
      <div className={`${styles.boxWidth}`}>
        <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold text-center pb-8">
          MY SERVICES
        </h3>

        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          {servicesData.map((item) => (
            <div
              key={item.title}
              className="box-shadow bg-gray-100 dark:text-gray-300 dark:bg-darkModeThird flex flex-col items-center py-7 box-shadow"
              onMouseEnter={() => setIsHovered(item.title)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img src={item.icon} alt="email listing" className="h-16 mb-3" />
              <b
                className="capitalize"
                style={{ color: isHovered === item.title && themeColor }}
              >
                {item.title}
              </b>
              <p className="px-4 pt-4 text-center text-sm text-gray-600 dark:text-gray-300 leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
