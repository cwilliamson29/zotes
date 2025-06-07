import React from 'react'
import UserNavBar from "../components/UserNavBar.jsx";
import {Outlet} from "react-router-dom";

function ProtectedRoutes() {
    return (
        <div className="w-full h-screen bg-stone-600 text-white">
            <UserNavBar/>
            <Outlet/>
        </div>
    )
}

export default ProtectedRoutes
