import React from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {Transition} from "@headlessui/react";

function DisplayDirectories({directory}) {
    const [expanded, setExpanded] = React.useState(false);
    const sortedDirectories = sortDirectoriesByName(directory.children)
    return (
        <div className="pl-1" onClick={() => setExpanded(!expanded)}>
            {directory.name} - {directory.parent_id}

            <Transition show={expanded} enter="transition ease-in-out duration-150" enterFrom="opacity-0 h-0" enterTo="opacity-100 h-auto"
                        leave="transition ease-in-out duration-150" leaveFrom="opacity-100 h-auto" leaveTo="opacity-0 h-0">
                <div className="min-w-full">
                    {sortedDirectories.map((child) => (

                        <div key={child.id} className="pl-3">{child.name}</div>)
                    )}
                </div>
            </Transition>
            {/*{sortedDirectories.map((child) => (*/}

            {/*    <div key={child.id} className="pl-3">{child.name}</div>)*/}
            {/*)}*/}
            <div id={"parentContent" + directory.id}></div>
        </div>
    )
}

export default DisplayDirectories
