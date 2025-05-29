import React from 'react'
import {Link} from "react-router-dom";

function UserNavBar() {
    const sm = ""
    const md = ""
    const lg = " p-3 border-b-1 border-blue-500 ml-2 cursor-pointer hover:bg-gray-800"
    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'Notes', link: '/user'},
        {name: 'Docs', link: '/docs'},
        {name: 'Help', link: '/help'}
    ]
    return (
        <div className="flex justify-between w-full pb-2 border-b-1 border-gray-800">
            <div className="flex">
                <h2 className="m-auto px-4 py-3 bg-blue-500">Zotes</h2>

                {menuItems.map(menuItem => (
                    <Link to={menuItem.link} key={menuItem.name}>
                        <div className={sm + md + lg}>{menuItem.name}</div>
                    </Link>
                ))}

            </div>

            <div className="">
                <Link to={"/user/profile"}>
                    <div className={sm + md + lg}>Profile</div>
                </Link>
            </div>

        </div>
    )
}

export default UserNavBar
