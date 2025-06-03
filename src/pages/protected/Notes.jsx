import React from 'react'
import Sidebar from "../../components/notes/Sidebar.jsx";
import NotesView from "../../components/notes/NotesView.jsx";

function Notes() {
    return (
        <div className="flex min-h-[calc(100%-58px)] bg-red-300">
            <Sidebar/>
            <NotesView/>
        </div>
    )
}

export default Notes
