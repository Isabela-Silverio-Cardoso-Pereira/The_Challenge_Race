import {Link } from "react-router-dom";
import styled from "styled-components";
import {motion} from 'framer-motion'

function Historic() {

    const NavUnlisted = styled.ul`
    text-decoration: none;
`;
const linkStyle = {
    color: '#000',
    textDecoration: "none",
}


    return <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
            <header className="headerBg">
                <div className="background">
                    <nav>
                        <div className="navbar">
                            <div className="container nav-container">
                                <h1 className="titleHis">Histórico</h1>
                            </div>
                        </div>
                    </nav>

                    <div className="headDiv">                     
                        <div className="fInputTxtRace">

                            <label htmlFor="inp" className="inpN">
                                <input id="inpN" placeholder="Pesquisar" pattern=".{6,}" required></input>
                                <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                </svg>
                                
                                <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </label>
                        </div>

                        <button className="btn-enter RaceFilter">Filtro</button>
                        <button className="btn-enter RaceOrder">ORDENAR</button>
                    </div>

                    <div className="homebg Runners">
                    
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 1"><Link style={linkStyle} to="/raceHistoric">Corrida 1</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 2"><Link style={linkStyle} to="/raceHistoric">Corrida 2</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 3"><Link style={linkStyle} to="/raceHistoric">Corrida 3</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 4"><Link style={linkStyle} to="/raceHistoric">Corrida 4</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 5"><Link style={linkStyle} to="/raceHistoric">Corrida 5</Link><Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 6"><Link style={linkStyle} to="/raceHistoric">Corrida 6</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 7"><Link style={linkStyle} to="/raceHistoric">Corrida 7</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 8"><Link style={linkStyle} to="/raceHistoric">Corrida 8</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 9"><Link style={linkStyle} to="/raceHistoric">Corrida 9</Link> <Link style={linkStyle} to="/raceHistoric"><svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                    <Link style={linkStyle} to="/raceHistoric"><div className="boxRace 10"><Link style={linkStyle} to="/raceHistoric">Corrida 10</Link> <Link style={linkStyle} to="/raceHistoric"> <svg className="arrowIcon  A" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link></div></Link>
                        
                        
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

export default Historic