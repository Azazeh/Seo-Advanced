import React from "react"

const Input = ({ placeholder, onChange, type = "text", className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{color: "white"}}
      className={`px-2 py-2 rounded-lg bg-bg bg-opacity-20 border-transparent flex-1 appearance-none text-white placeholder:text-white placeholder:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent ${className}`}
    ></input>
  )
}

export default Input
