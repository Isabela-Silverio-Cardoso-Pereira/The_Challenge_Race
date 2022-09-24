import React from 'react'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Scan from '../pages/Scan'
import Congrats from '../pages/Congrats'
import Register from '../pages/Register'
import { Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/scan" element={<Scan/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/congrats" element={<Congrats/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    </AnimatePresence>
    </>
}

export default AnimatedRoutes