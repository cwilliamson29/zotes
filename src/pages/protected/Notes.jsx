import React from 'react'
import Sidebar from "../../components/notes/Sidebar.jsx";
import NotesView from "../../components/notes/NotesView.jsx";

function Notes() {
    return (
        <div className="flex h-full">
            <Sidebar/>
            <NotesView/>
        </div>
    )
}

export default Notes
