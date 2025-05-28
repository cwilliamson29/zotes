import React from 'react'
import UserNavBar from "../components/UserNavBar.jsx";
import {Outlet} from "react-router-dom";

function User() {
    return (
        <>
            <UserNavBar />
            <Outlet />
            </>
    )
}

export default User
