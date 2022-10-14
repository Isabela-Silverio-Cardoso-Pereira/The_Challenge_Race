import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import styled from "styled-components";

function RaceHistoric() {
    const NavUnlisted = styled.ul`
    text-decoration: none;
    text-align: center;
    top: 430px;
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
            <header className="headerBg">
                <div className="background">
                    <nav>
                        <div className="navbar">
                            <div className="container nav-container">
                                <h1 className="titleHis">Histórico</h1>
                            </div>
                        </div>
                    </nav>

                    <div className="racehistoric">
                        <div className="infoHistoric">
                            <p className="textHis">Tempo de Corrida<p className="textHisNum">00</p></p>
                            <p className="textHis">Posição<p className="textHisNum">00</p></p>
                            <p className="textHis">Acertos<p className="textHisNum">00</p></p>
                            <p className="textHis">Erros<p className="textHisNum">00</p></p>
                        </div>
                    </div>
                </div>

                <NavUnlisted>
                    <button className="btn-enter">
                        <Link style={linkStyle} to="/registerUser">Voltar</Link>
                    </button>
                </NavUnlisted>
            </header>
            <footer>
                <svg className="footerWave scoreboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </footer>
        </motion.div>
    </>
}

export default RaceHistoric