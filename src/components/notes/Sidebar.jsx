import React from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {useData} from "../../hooks/useData.jsx";
import DisplayDirectories from "./DisplayDirecories.jsx";

function Sidebar() {
    const menuItems = [
        {name: "A Test Directory", id: 1, parent_id: null, children: []},
        {
            name: "C Test Directory2", id: 2, parent_id: null, children: [
                {name: "B Test sub-Directory1", id: 5, parent_id: 2, children: []},
                {name: "A Test sub-Directory2", id: 6, parent_id: 2, children: []},
            ]
        },
        {
            name: "B Test Directory3", id: 3, parent_id: null, children: [
                {name: "Test sub-Directory3", id: 7, parent_id: 3, children: []},
            ]
        },
        {
            name: "D Test Directory4", id: 4, parent_id: null, children: [
                {name: "Test sub-Directory4", id: 8, parent_id: 4, children: []},

            ]
        },
    ];

    const {parents} = useData()
    console.log(parents)
    const sortedDirectories = sortDirectoriesByName(parents)
    //console.log(sortedDirectories)
    return (
        <div className="w-[350px] bg-amber-100 text-black h-full">
            <h2 className="text-lg font-bold pl-2">Notes</h2>
            {sortedDirectories.map((item) => (
                <DisplayDirectories directory={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Sidebar
