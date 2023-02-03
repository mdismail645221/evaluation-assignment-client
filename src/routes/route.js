import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../components/AddStudent/AddStudent";
import Login from "../components/Login/Login";
import ManageStudent from "../components/ManageStudent/ManageStudent";
import Register from "../components/Register/Register";
import Main from "../layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUND</div>,
        children: [
            {
                path: '/addStudent',
                element: <AddStudent></AddStudent>
            },
            {
                path: '/manageStudent',
                element: <ManageStudent></ManageStudent>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])