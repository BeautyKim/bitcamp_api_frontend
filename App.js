import React from 'react'
import {useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import Bmi from './components/Bmi'
import Calc from './components/Calc'
import Google from './components/Google'
import Login from './components/Login'
import Grade from './components/Grade'

   export default function App(){
     return useRoutes([
       {path: "/", element: <Home/>},
       {path: "bmi", element: <Bmi/>},
       {path: "calc", element: <Calc/>},
       {path: "grade", element: <Grade/>},
       {path: "google", element: <Google/>},
       {path: "login", element: <Login/>}
     ]);
}