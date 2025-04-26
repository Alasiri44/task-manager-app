import { Children } from "react"
import App from "./App"
import CreateTask from "./pages/Create"
import AllTasks from "./pages/AllTasks"
import Home from "./pages/Home"
import EisenHower from "./pages/EisenHower"
import { Navigate } from "react-router-dom"


export const routes = ([
    {
        path: '/',
        element: < App/>,
        children: [
            {
                path: '',
                element: <Navigate to='/eisenhower' />
            },
            {
                path: '/home',
                element: <Home/>
                
            },
            {
                path: '/eisenhower',
                element: <EisenHower/>
            },
            {
                path: '/create',
                element: < CreateTask/>
            },
            {
                path: '/tasks',
                element: < AllTasks/>
            }
        ]
    }
])

