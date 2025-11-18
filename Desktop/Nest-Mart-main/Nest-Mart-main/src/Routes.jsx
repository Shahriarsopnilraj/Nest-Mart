import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Megamenu from './Pages/MegaMenu/Megamenu'
import App from './App'
import BlogDetails from './Pages/Blog/BlogDetails'

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
             path:"/",
             element:<App></App>   
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path: "/blog/:blogId",
                loader: ({params})=>{
                    return fetch ('/blog.json').then(res => res.json()).then(blog => blog.find( b => b.id === parseInt(params.blogId)))
                },
                Component : BlogDetails
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/megamenu",
                element:<Megamenu></Megamenu>
            },

        ]
    }
]) 

export default Routes
