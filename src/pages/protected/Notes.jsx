import React from 'react'
import Sidebar from "../../components/notes/Sidebar.jsx";
import NotesView from "../../components/notes/NotesView.jsx";

function Notes() {
    return (
        <div className="xl:flex min-h-[calc(100%-58px)] bg-gray-300">
            <Sidebar/>
            <NotesView/>
        </div>
    )
}

export default Notes
