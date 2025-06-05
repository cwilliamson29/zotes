import React, {useState} from 'react'
import {CgMenuGridR} from "react-icons/cg";
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/io";

function UserNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const sm = "border-b-1 border-gray-500 block px-2 py-2 rounded hover:bg-blue-800"
    const lg = " md:p-3 border-b-1 border-blue-500 lg:ml-2 cursor-pointer hover:bg-gray-800 hover:text-blue-300 transition duration-200"
    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'Notes', link: '/user'},
        {name: 'Docs', link: '/docs'},
        {name: 'Help', link: '/help'},
        {name: 'Profile', link: '/user/profile'}
    ]
    return (
        <nav className="flex flex-col md:flex-row justify-between w-full pb-2 border-b-1 bg-gray-900 border-blue-500">
            {/* Logo */}
            <div className="flex flex-row justify-between w-full h-full">
                <div className="text-2xl font-bold tracking-wide ml-2 h-full m-auto">Zotes</div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoMdClose size={28}/> : <CgMenuGridR size={28}/>}
                </button>
            </div>

            {/* Desktop Nav Links */}
            <div className="max-w-7xl mx-auto flex flex-col justify-between items-center">
                <div className="hidden md:flex space-x-6">
                    {menuItems.map((menuItem) => (
                        <Link to={menuItem.link} key={menuItem.name}>
                            <div className={lg}>{menuItem.name}</div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-3">
                    {menuItems.map((menuItem) => (
                        <Link to={menuItem.link} key={menuItem.name}>
                            <div className={sm}>{menuItem.name}</div>
                        </Link>
                    ))}
                </div>
            )}


        </nav>
    )
}

export default UserNavBar
