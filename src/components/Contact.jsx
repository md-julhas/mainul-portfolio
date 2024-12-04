import React, { useState } from "react"
import styles from "../style"
import { contactInfo } from "../constants/data"
import { useStateContext } from "../contexts/ContextProvider"

const Contact = () => {
  const { themeColor } = useStateContext()
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const { firstName, lastName, email, subject, message } = formInfo

  const handleChange = (e) => {
    setFormInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormInfo({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div
      className={`bg-gray-50 py-16 dark:bg-darkModePrimary portfolio contact ${styles.paddingX} ${styles.flexCenter} select-none`}
    >
      <div className={`${styles.boxWidth}`}>
        <h3 className="text-2xl text-gray-700 dark:text-gray-300 font-semibold text-center pb-8">
          CONTACT WITH ME
        </h3>

        <div className="grid md:grid-cols-3 ss:grid-cols-2 gap-5 md:gap-16 ">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="bg-gray-100 dark:bg-darkModeThird dark:text-gray-300 flex flex-col items-center gap-4 p-5"
            >
              <span className="text-2xl">{item.icon}</span>
              <b>{item.title}</b>
              <p style={{ color: themeColor }}>{item.description}</p>
            </div>
          ))}
        </div>

        <form
          className="grid md:grid-cols-2 mt-16 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your First Name..."
              className="p-4 rounded-md dark:bg-darkModeThird dark:border-gray-500 dark:text-gray-300"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Your Last Name..."
              className="p-4 rounded-md dark:bg-darkModeThird dark:border-gray-500 dark:text-gray-300"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Your Email Address (e.g. your@example.com)"
              className="p-4 rounded-md dark:bg-darkModeThird dark:border-gray-500 dark:text-gray-300"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Subject..."
              className="p-4 rounded-md dark:bg-darkModeThird dark:border-gray-500 dark:text-gray-300"
              name="subject"
              value={subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Message..."
              className="rounded-md p-4 w-full h-[342px] dark:bg-darkModeThird dark:border-gray-500 dark:text-gray-300"
              value={message}
              name="message"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="px-3 py-2 rounded-md float-right mt-5 text-white box-shadow"
              style={{ backgroundColor: themeColor }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
