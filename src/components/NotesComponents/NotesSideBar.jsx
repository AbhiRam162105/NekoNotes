import React from 'react'
import "../CSS/NotesSideBar.css"
import NotesTitle from './NotesTitle'
import FileUploadButton from "./UploadBtn";


function NotesSideBar() {
    return (
        <div className='sideBar-warapper'>

            <div className="note-btns">

                <button className="newNote">
                    Generate
                </button>
                <button className="newNote">
                    <FileUploadButton/>
                </button>
                <button className="newNote">
                    New Note +
                </button>
            </div>

            <NotesTitle/>
            <NotesTitle/>
            <NotesTitle/>
        </div>
    )
}

export default NotesSideBar
