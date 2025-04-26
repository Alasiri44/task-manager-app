import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import { routes } from './routes'

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}/>
    
)
