import React from 'react'
import {motion} from 'framer-motion'
import win from '../assets/win.svg'
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

function Congrats() {
    const NavUnlisted = styled.ul`
    text-decoration: none;
`;
    const linkStyle = {
        color: '#fff',
        textDecoration: "none",
}
    return <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <header className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="headline winner">
            <h1>Parabéns</h1>
            <div className="subtitle">
                <span>Você concluiu a corrida</span>
            </div>

        </div>
        <div className="bgWin">
        <img src={win} className="imgWin"></img>
        </div>

    <div className="btnParent">
        <NavUnlisted>
            <button className="btn-enter win">
                <Link style={linkStyle} to="/">VER PLACAR</Link>
            </button>
        </NavUnlisted>
    </div>
    </header>

    <footer>
        <svg className="footerWave scoreboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    </footer>
    </motion.div>
    </>
}
export default Congrats