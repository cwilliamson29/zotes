import {createBrowserRouter} from "react-router-dom";
import About from "./pages/About.jsx";
import User from "./pages/User.jsx";
import Notes from "./pages/Notes.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

export const router = createBrowserRouter([
    {path: "/", element: <App />, children: [
            {path:"/", element: <Home />},
            {path:"/about", element: <About />}
        ]},
    {path: "/user", element: <User />, children: [
        {path:"/user", element: <Notes />},
        ]},
    {path:'*', element: <NotFound />},
])