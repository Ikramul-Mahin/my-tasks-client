import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homes from "../Pages/Homes/Homes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/Task/AddTask/AddTask";
import CompletedTask from "../Pages/Task/CompletedTask/CompletedTask";
import MyTask from "../Pages/Task/MyTask/MyTask";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main ></Main>,
        children: [
            {
                path: '/',
                element: <Homes ></Homes>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <CompletedTask></CompletedTask>
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