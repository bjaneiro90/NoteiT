import React from 'react'
import { useState, useRef, useMemo } from 'react'
import JoditEditor from "jodit-react"
import HTMLReactParser from 'html-react-parser'

const Jodit = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('')

  return (
    <>
        <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)}/>
        <span>{HTMLReactParser(content)}</span>
    </>
  )
}

export default Jodit