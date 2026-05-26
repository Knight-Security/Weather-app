import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from "./Components/Dashboard"
import Explore from './Components/Explore'
import Saved from './Components/Saved'
import Detailed from './Components/Detailed'
import App from './App'
const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:"Explore",
                element:<Explore/>
            },
            // {
            //     path:"Explore",
            //     element:<Explore/>
            // },
            {
                path:"Saved",
                element:<Saved/>
            },
            {
                path:"Detailed",
                element:<Detailed/>
            }

        ]
    }
])
export default router
