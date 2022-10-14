import {Link } from "react-router-dom";
import styled from "styled-components";
import {motion} from 'framer-motion'

function Home() {

const NavUnlisted = styled.ul`
    text-decoration: none;
`;
const linkStyle = {
    color: '#fff',
    textDecoration: "none",
}
const linkStyle1 = {
    color: '#000',
    textDecoration: "none",
}
    return <>
    <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <header className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>

            <div className="headline">
                <h1>Bem-Vindo</h1>
                <div className="subtitle">
                    <span>O que deseja fazer?</span>
                </div>
            </div>

            <div className="fInputTxt">
                <label htmlFor="inp" className="inp">
                <input id="inp" placeholder="Insira o código" pattern=".{6,}" required></input>
                <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                </svg>
                <svg width="14px" height="12px" viewBox="0 0 14 12" className="check">
                    <path d="M1 7 5.5 11 L13 1"></path>
                </svg>
                </label>
                <div className="btnParent">
                <NavUnlisted>
                    <button className="btn-enter">
                        <Link style={linkStyle} to="/registerUser">Entrar</Link>
                    </button>
                </NavUnlisted>

                <NavUnlisted>
                    <button className="btn-enter newRace">
                        <Link style={linkStyle} to="/registerHost">CRIAR NOVA CORRIDA</Link>
                    </button>
                    </NavUnlisted>

                <NavUnlisted>
                    <button className="btn-enter historic">
                        <Link style={linkStyle1} to="historic">HISTÓRICO</Link>
                    </button>
                </NavUnlisted>
                </div>
            </div>
        </header>
        <footer>
            <svg className="footerWave waveHome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
        </footer>
    </motion.div>
</>
}

export default Home