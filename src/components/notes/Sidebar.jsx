import React from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {useData} from "../../hooks/useData.jsx";
import DisplayDirectories from "./DisplayDirecories.jsx";

function Sidebar() {
    const {parents} = useData()

    const sortedDirectories = sortDirectoriesByName(parents)

    return (
        <div className="w-[350px] bg-gray-900 text-black h-full">
            <h2 className="text-lg text-white font-bold pl-2">Notes</h2>
            <div className="bg-gray-200 rounded-sm m-1 h-full">
                {sortedDirectories.map((item) => (
                    <DisplayDirectories directory={item} key={item.id}/>
                ))}
            </div>

        </div>
    )
}

export default Sidebar
