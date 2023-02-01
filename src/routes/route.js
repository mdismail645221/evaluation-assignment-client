import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUND</div>,
        children: [
            {
                path: '/',
                element: []
            }
        ]
    }
])