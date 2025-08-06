import { createBrowserRouter } from "react-router-dom";
import { Inicio } from "../page/inicio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>
    }
])