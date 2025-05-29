import {createBrowserRouter} from "react-router-dom";
import About from "./pages/public/About.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
import Notes from "./pages/protected/Notes.jsx";
import App from "./App.jsx";
import Home from "./pages/public/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/public/Login.jsx";

export const router = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "/", element: <Home/>},
            {path: "/about", element: <About/>},
            {path: "/login", element: <Login/>},
            {path: '*', element: <NotFound/>},
        ]
    },
    {
        path: "/user", element: <ProtectedRoutes/>, children: [
            {path: "/user", element: <Notes/>},
        ]
    },

])