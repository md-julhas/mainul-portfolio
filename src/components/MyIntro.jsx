import React from "react"

import styles from "../style"
// import skills from "../assets/skills3.png"
import skills from "../assets/skills.svg"
import Button from "./Button"
import { useStateContext } from "../contexts/ContextProvider"
import Card from "./Card"
import { hobbiesAndInterests } from "../constants/data"

const MyIntro = () => {
  const { themeColor } = useStateContext()

  return (
    <div
      className={`${styles.flexCenter} ${styles.paddingX} bg-gray-100 h-auto w-full dark:bg-darkModeSecondary my-intro select-none`}
    >
      <div className={`${styles.boxWidth} py-16`}>
        <div className="grid md:grid-cols-8">
          <div className="h-[400px] xs:h-auto flex md:col-span-3 items-center justify-center md:justify-start">
            <img
              src={skills}
              alt="skills image"
              className="h-96 sm:h-80 md:h-auto"
            />
          </div>

          <div className="md:col-span-5 md:pl-9 text-center pt-16 md:pt-0 md:text-start flex flex-col gap-y-5 leading-7">
            <h3 className="text-2xl text-gray-700 font-semibold dark:text-gray-300">
              Mohiuddin Mainul
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I am a{" "}
              <b style={{ color: themeColor }}>
                Data Entry and Lead Generation Expert
              </b>
            </p>
            <div className="text-gray-700 dark:text-gray-300 flex flex-col gap-y-4">
              <p>
                Hello, I'm Mohiuddin Mainul, a seasoned professional in the
                realm of data management and business solutions. With a
                relentless commitment to accuracy and efficiency, I specialize
                in providing comprehensive services tailored to meet your unique
                data needs.
              </p>
              <p>
                Proficient in Data Cleansing, Web Research, Contact List
                Building, LinkedIn Research, Email List Building, Pdf to
                editable Docx, and Data Mining, I bring a versatile skill set to
                the table. From refining data quality to extracting valuable
                insights, I am equipped to handle diverse tasks, ensuring your
                business thrives in the data-driven landscape.
              </p>
              <p>
                Embark on a journey of streamlined data operations with me.
                Together, we can harness the power of data to drive informed
                decisions and propel your business forward.
              </p>
            </div>

            <div>
              <Button text={"View Portfolio"} bg={themeColor} />
            </div>
          </div>
        </div>

        {/* HOBBIES & INTERESTS */}
        <div className="pt-16">
          <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold text-center pb-8">
            HOBBIES & INTERESTS
          </h3>
          <div className="grid ss:grid-cols-2 md:grid-cols-4 gap-4">
            {hobbiesAndInterests.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyIntro
