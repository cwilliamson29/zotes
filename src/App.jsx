import Navbar from "./components/Navbar.jsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className="w-full bg-yellow-500">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default App
