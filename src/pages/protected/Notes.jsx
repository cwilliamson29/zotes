import React from 'react'
import Sidebar from "../../components/notes/Sidebar.jsx";
import NotesView from "../../components/notes/NotesView.jsx";

function Notes() {
    return (
        <div className="xl:flex min-h-[calc(100%-58px)] ">
            <Sidebar/>
            <NotesView/>
        </div>
    )
}

export default Notes
