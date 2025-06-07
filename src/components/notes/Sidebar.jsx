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
            <div className="xl:hidden p-2 bg-stone-700 text-orange-700 flex flex-row justify-between w-full">
                <div className="flex" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiMenuUnfold4Fill size={24}/> : <RiMenuUnfold3Fill size={24}/>}
                    <p className="ml-1">Open Directories</p>
                </div>
                <div className="flex">
                    <AiFillFolderAdd size={24}/>
                    <AiFillFileAdd size={24} className="ml-2"/>
                </div>
            </div>

            <div className={`fixed xl:static z-30 top-0 left-0 h-full  max-w-[300px] min-w-[300px] text-white transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0`}>

                <div className="p-2 font-bold text-xl border-b border-orange-700 flex items-center justify-between">
                    <p>Zotes</p>
                    {isOpen && <FaWindowClose color="white" onClick={() => setIsOpen(false)}/>}

                </div>

                <div className="flex flex-col">
                    {sortedDirectories.map((item) => (
                        <DisplayDirectories directory={item} key={item.id} level={1}/>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-stone-900/90 xl:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    )
}

export default Sidebar
