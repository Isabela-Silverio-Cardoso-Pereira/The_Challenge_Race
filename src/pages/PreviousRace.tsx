import {Link } from "react-router-dom";
import styled from "styled-components";
import {motion} from 'framer-motion'
import runnner from "../assets/img/run.svg"

function PreviousRace() {

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

            <div className="headline">
                <h1 className="titlePrevious">Antes de Criar</h1>
                <span className="spanP">Deseja copiar os checkpoints de uma corrida já existente?</span>
                <img className="imgP" src={runnner}></img>
            </div>

            <div className="buttonCenter">

            <span className="custom-dropdown small">
                <select>
                    <option>Corrida 1</option>
                    <option>Corrida 2</option>  
                    <option>Corrida 3</option>
                    <option>Corrida 4</option>
                    <option>Corrida 5</option>
                </select>
            </span>

                <div className="btnParent">
                <NavUnlisted>
                    <button className="btn">
                        <Link style={linkStyle} to="/race">
                            Enviar
                        </Link>
                    </button>
                </NavUnlisted>
                </div>
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

export default PreviousRace