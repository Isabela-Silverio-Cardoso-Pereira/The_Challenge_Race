import { motion } from "framer-motion";
import { useContext } from "react";
import {Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function Runners(){

    const auth = useContext(AuthContext)


    const handleLogout = async() => {
        await auth.signout()
        window.location.href = window.location.href
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
                                <input className="checkbox" type={"checkbox"} />
                                <div className="hamburger-lines">
                                    <span className="line line1"></span>
                                    <span className="line line2"></span>
                                    <span className="line line3"></span>
                                </div>
                                <div className="menu-items">
                                <svg className="runnerIcon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></svg>
                                    <li><Link to="/runners"><a href="#">Corredores</a></Link></li>
                                <svg className="checkpointIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"/></svg>
                                    <li><Link to="/checkpoints"><a href="#">Pontos</a></Link></li>
                                <svg className="challengeIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z"/></svg>
                                    <li><Link to="/challenges"><a href="#">Desafios</a></Link></li>

                                    <svg className="logOutIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                    {
                                            auth.user
                                            &&
                                            <a className="logOutText" onClick={handleLogout}> <p className="desconect">Desconectar</p> </a>
                                        }
                                </div>
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
                        <div className="boxRace um"><p className="textRun">Dom Pedro I  </p><p>17min 54s</p></div>
                        <div className="boxRace dois"><p className="textRun">Duque de Caxias    17min 54s</p></div>
                        <div className="boxRace tres"><p className="textRun">José Bonifácio 17min 54s</p></div>
                        <div className="boxRace quatro"><p className="textRun">São José de Anchieta 17min 54s</p></div>
                        <div className="boxRace cinco"><p className="textRun">Luís Gonzaga  17min 54s</p></div>
                        <div className="boxRace seis"><p className="textRun">Heitor Villa-Lobos 17min 54s</p></div>
                        <div className="boxRace sete"><p className="textRun">Joaquim Nabuco 17min 54s</p></div>
                        <div className="boxRace oito"><p className="textRun">Antônio Carlos   17min 54s</p></div>
                        <div className="boxRace nove"><p className="textRun">Luís Gonzaga   17min 54s</p></div>
                        <div className="boxRace dez"><p className="textRun">Zumbi dos Palmares  17min 54s</p></div>
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

export default Runners