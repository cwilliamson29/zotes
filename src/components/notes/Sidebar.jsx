import React, {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {useData} from "../../hooks/useData.jsx";
import DisplayDirectories from "./DisplayDirecories.jsx";
import {RiMenuUnfold3Fill, RiMenuUnfold4Fill} from "react-icons/ri";
import {FaWindowClose} from "react-icons/fa";
import {AiFillFileAdd, AiFillFolderAdd} from "react-icons/ai";

function Sidebar() {
    const {parents} = useData()
    const [isOpen, setIsOpen] = useState(false);

    const sortedDirectories = sortDirectoriesByName(parents)

    return (
        <>
            <div className="xl:hidden p-2 bg-gray-700 text-whitel flex flex-row justify-between w-full">
                <div className="flex" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiMenuUnfold4Fill size={24}/> : <RiMenuUnfold3Fill size={24}/>}
                    <p className="ml-1">Open Directories</p>
                </div>
                <div className="flex">
                    <AiFillFolderAdd size={24}/>
                    <AiFillFileAdd size={24} className="ml-2"/>
                </div>
            </div>

            <div className={`fixed xl:static z-30 top-0 left-0 h-full w-80 bg-gray-200 text-black transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0`}>

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
                    className="fixed inset-0 bg-black bg-opacity-50 xl:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    )
}

export default Sidebar
