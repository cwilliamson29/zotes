import React, {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {useData} from "../../hooks/useData.jsx";
import DisplayDirectories from "./DisplayDirecories.jsx";
import {RiMenuUnfold3Fill, RiMenuUnfold4Fill} from "react-icons/ri";
import {FaWindowClose} from "react-icons/fa";

function Sidebar() {
    const {parents} = useData()
    const [isOpen, setIsOpen] = useState(false);

    const sortedDirectories = sortDirectoriesByName(parents)

    return (
        <>
            <div className="md:hidden p-2 bg-black text-white">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiMenuUnfold4Fill size={24}/> : <RiMenuUnfold3Fill size={24}/>}
                </button>
            </div>

            <div className={`fixed md:static z-30 top-0 left-0 h-full w-80 bg-gray-600 text-white transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

                <div className="p-2 font-bold text-xl border-b border-gray-700 flex items-center justify-between">
                    <p>Zotes</p>
                    {isOpen && <FaWindowClose onClick={() => setIsOpen(false)}/>}

                </div>

                <div className="flex flex-col p-4 space-y-2">
                    {sortedDirectories.map((item) => (
                        <DisplayDirectories directory={item} key={item.id}/>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/*{sortedDirectories.map((item) => (*/}
            {/*    <DisplayDirectories directory={item} key={item.id}/>*/}
            {/*))}*/}


        </>
    )
}

export default Sidebar
