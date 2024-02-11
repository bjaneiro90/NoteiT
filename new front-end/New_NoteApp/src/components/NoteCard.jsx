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
                 <TextEditor   /> 
              </div>
              <div className="form-group-notecard-category">
                <select className="category-selection" id="number" name="category_id">
                <option className='choose' selected disabled >Choose a Category</option>
                <option value="1">Tecnologia</option>
                <option value="2">Actuality</option>
                <option value="3">Gastronomy</option>
                <option value="4">Travels</option>
                <option value="5">Animals</option>
                <option value="6">Music</option>
                <option value="7">Cinema</option>
                <option value="8">International</option>
                <option value="9">Culture</option>
                <option value="10">Reminders</option>
                </select>
              </div>
              <div className="form-group-notecard-public_private">
                <div>
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                  <label for="html">Public</label>
                </div>
                <div>
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                  <label for="html">Private</label>
                </div>
              </div>
            
            </form>
        </div>
    )
}

export default NoteCard