import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Scan from '../pages/Scan'
import ScanValidator from '../pages/ScanValidator'
import Congrats from '../pages/Congrats'
import RegisterHost from '../pages/RegisterHost'
import RegisterUser from '../pages/RegisterUser'
import { Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Race from '../pages/Race'
import Runners from '../pages/Runners'
import Checkpoints from '../pages/Checkpoints'
import Challenges from '../pages/Challenges'
import Historic from '../pages/Historic'
import RaceHistoric from '../pages/RaceHistoric'
import Question from '../pages/Question'
import PreviousRace from '../pages/PreviousRace'
import NextCheckpoint from '../pages/NextCheckpoint'


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
            <Route path="/scanValidator" element={<ScanValidator/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/congrats" element={<Congrats/>}></Route>
            <Route path="/registerUser" element={<RegisterUser/>}></Route>
            <Route path="/registerHost" element={<RegisterHost/>}></Route>
            <Route path="/race" element={<Race/>}></Route>
            <Route path="/runners" element={<Runners/>}></Route>
            <Route path="/checkpoints" element={<Checkpoints/>}></Route>
            <Route path="/nextCheckpoint" element={<NextCheckpoint/>}></Route>
            <Route path="/challenges" element={<Challenges/>}></Route>
            <Route path="/historic" element={<Historic/>}></Route>
            <Route path="/raceHistoric" element={<RaceHistoric/>}></Route>
            <Route path="/question" element={<Question/>}></Route>
            <Route path="/previousRace" element={<PreviousRace/>}></Route>

        </Routes>
    </AnimatePresence>
    </>
}

export default AnimatedRoutes