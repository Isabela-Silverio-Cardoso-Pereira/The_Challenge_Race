import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import styled from "styled-components";

function Question() {
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
                                <h1 className="titleHis">Pergunta</h1>
                            </div>
                        </div>
                    </nav>

                    <div className="questionHistoric">
                        <div className="infoHistoric">
                            <form className="w3-container">
                                <p className="textResp">
                                <label>Nome da pergunta: </label>
                                </p>
                                <div className="fInputTxtRace">
                                    <label htmlFor="inp" className="inpN">
                                        <input id="inpN" placeholder="Nome" pattern=".{6,}" required></input>
                                        <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                        </svg>                                       
                                    </label>
                                </div>

                                <p className="textResp">
                                <label>Conteúdo da pergunta: </label>
                                </p>
                                <div className="fInputTxtRace">
                                    <label htmlFor="inp" className="inpN">
                                        <input id="inpN" placeholder="Pergunta" pattern=".{6,}" required></input>
                                        <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                        </svg>                                       
                                    </label>
                                </div>

                                <p className="textResp">
                                <label>Alternativas: </label>
                                </p>

                                <div className="fInputTxtRace">
                                    <label htmlFor="inp" className="inpN">
                                        <input id="inpN" placeholder="A" pattern=".{6,}" required></input>
                                        <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                        </svg>                                       
                                    </label>
                                </div>

                                <div className="fInputTxtRace">
                                    <label htmlFor="inp" className="inpN">
                                        <input id="inpN" placeholder="B" pattern=".{6,}" required></input>
                                        <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                        </svg>                                       
                                    </label>
                                </div>

                                <div className="fInputTxtRace">
                                    <label htmlFor="inp" className="inpN">
                                        <input id="inpN" placeholder="C" pattern=".{6,}" required></input>
                                        <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                        </svg>                                       
                                    </label>
                                </div>

                                <div className="fInputTxtRace">
                                    <label htmlFor="inp" className="inpN">
                                        <input id="inpN" placeholder="D" pattern=".{6,}" required></input>
                                        <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                                        </svg>                                       
                                    </label>
                                </div>
                            </form>
                            <p>Quais das alternativas são verdadeiras?</p>{/** select*/}
                            <div className="custom-select">
                            <label className="control control--radio">A
                                <input type="radio" name="radio"/>
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control--radio">B
                                <input type="radio" name="radio"/>
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control--radio">C
                                <input type="radio" name="radio"/>
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control--radio">D
                                <input type="radio" name="radio"/>
                                <div className="control__indicator"></div>
                            </label>
</div>
                            <p>Imagem da questão </p>
                            <button className="qAdd"><svg className="svgImg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
</button>
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

export default Question