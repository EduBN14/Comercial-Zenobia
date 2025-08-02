import { createBrowserRouter } from "react-router-dom";
import { Inicio } from "../componentes/inicio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>
    }
])