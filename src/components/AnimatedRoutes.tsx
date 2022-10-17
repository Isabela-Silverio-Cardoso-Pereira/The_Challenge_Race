import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Scan from '../pages/Scan'
import ScanValidator from '../pages/ScanValidator'
import Congrats from '../pages/Congrats'
import {RegisterHost} from '../pages/RegisterHost'
import { Routes, Route} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Race from '../pages/private/Race'
import Runners from '../pages/private/Runners'
import Checkpoints from '../pages/private/Checkpoints'
import Challenges from '../pages/private/Challenges'
import Historic from '../pages/Historic'
import RaceHistoric from '../pages/RaceHistoric'
import CreateQuestion from '../pages/CreateQuestion'
import PreviousRace from '../pages/PreviousRace'
import NextCheckpoint from '../pages/NextCheckpoint'
import { RequireAuth } from '../contexts/Auth/RequireAuth'


function AnimatedRoutes() {


    return <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/scan" element={<RequireAuth><Scan/></RequireAuth>}></Route>
            <Route path="/scanValidator" element={<RequireAuth><ScanValidator/></RequireAuth>}></Route>
            <Route path="/quiz" element={<RequireAuth><Quiz/></RequireAuth>}></Route>
            <Route path="/congrats" element={<RequireAuth><Congrats/></RequireAuth>}></Route>

            <Route path="/registerHost" element={<RegisterHost/>}></Route>

            <Route path="/race" element={<RequireAuth><Race/></RequireAuth>}></Route>
            <Route path="/runners" element={<RequireAuth><Runners/></RequireAuth>}></Route>
            <Route path="/checkpoints" element={<RequireAuth><Checkpoints/></RequireAuth>}></Route>
            <Route path="/nextCheckpoint" element={<NextCheckpoint/>}></Route>
            <Route path="/challenges" element={<RequireAuth><Challenges/></RequireAuth>}></Route>
            <Route path="/historic" element={<RequireAuth><Historic/></RequireAuth>}></Route>
            <Route path="/raceHistoric" element={<RequireAuth><RaceHistoric/></RequireAuth>}></Route>
            <Route path="/createQuestion" element={<RequireAuth><CreateQuestion/></RequireAuth>}></Route>
            <Route path="/previousRace" element={<RequireAuth><PreviousRace/></RequireAuth>}></Route>

        </Routes>
    </AnimatePresence>
    </>
}

export default AnimatedRoutes