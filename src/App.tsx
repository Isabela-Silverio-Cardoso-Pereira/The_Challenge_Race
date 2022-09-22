import './App.css'

import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Scan from './pages/Scan'
import Congrats from './pages/Congrats'

import { Routes, Route} from "react-router-dom";

function App() {
  

  return <>
  <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/scan" element={<Scan/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/congrats" element={<Congrats/>}></Route>
        </Routes>
    
    </div>
  </>
}
export default App;


