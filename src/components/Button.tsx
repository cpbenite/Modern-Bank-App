import React from 'react'

type ButtonProps = {
  styles: string,
  text: string
}

const Button = ({ styles, text } : ButtonProps) => {
  return (
    <button 
      type="button" 
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-[10px]
                   text-[18px] text-primary outline-none ${styles}`}
    >
      {text}
    </button>
  )
}

export default Button