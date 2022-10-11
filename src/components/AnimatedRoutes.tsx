import React from 'react'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Scan from '../pages/Scan'
import Congrats from '../pages/Congrats'
import Register from '../pages/Register'
import { Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Race from '../pages/Race'
import Runners from '../pages/Runners'
import Checkpoints from '../pages/Checkpoints'
import Challenges from '../pages/Challenges'

function AnimatedRoutes() {
    const location = useLocation()

    // function Private({children}: React.PropsWithChildren) {
    //     const singed = false

    //     return singed ? <div>{children}</div> : <Register/>
    // }
    return <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/scan" element={<Scan/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/congrats" element={<Congrats/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/race" element={<Race/>}></Route>
            <Route path="/runners" element={<Runners/>}></Route>
            <Route path="/checkpoints" element={<Checkpoints/>}></Route>
            <Route path="/challenges" element={<Challenges/>}></Route>


        </Routes>
    </AnimatePresence>
    </>
}

export default AnimatedRoutes