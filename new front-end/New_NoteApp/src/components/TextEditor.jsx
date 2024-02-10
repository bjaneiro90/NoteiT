import { set } from 'date-fns'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import "../assets/css/texteditor.css"

export const TextEditor = () => {

    const [value, setValue] = useState("")


  return (
    <ReactQuill
    theme='snow' 
    placeholder='Escreve aqui...'
    value={value} 
    onChange={() =>{
        setValue(e.target.value)
    }}/>
  )
}

export default TextEditor
