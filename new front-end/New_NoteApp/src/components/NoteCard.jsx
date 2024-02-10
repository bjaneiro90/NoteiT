import React from 'react'
import "../assets/css/notecard.css"
import TextEditor from './TextEditor'
import Jodit from './Jodit'



export const NoteCard = () => {
    return (
        <div className='note-card'>
            <form action="">
            <div className="form-group-notecard">
              <input className="form-control-notecard" type="text" name="first_name" id="first_name" placeholder="Titulo"/>
            </div>
            <div className="form-group-notecard-texteditor">
              <TextEditor className='text-editor'  /> 
            </div>
              {/* <Jodit/> */}
            </form>
        </div>
    )
}

export default NoteCard