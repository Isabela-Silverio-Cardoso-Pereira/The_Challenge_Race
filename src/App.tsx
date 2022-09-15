import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import humanas from "./assets/history.svg"
import exatas from "./assets/math2.svg"
import filos from "./assets/filo.svg"
import natura from "./assets/natura.svg"
import geral from "./assets/apollo.svg"


const NavUnlisted = styled.ul`
  text-decoration: none;
`;
const linkStyle = {
  color: '#fff',
  textDecoration: "none",
  
}
function App() {
  

  return <>
  <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/scan" element={<Scan/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
        </Routes>
    
    </div>
  </>
}

function Home() {
  return <>
    <header className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>

        <div className="headline">
            <h1>Bem-Vindo</h1>
            <div className="subtitle">
                <span>Digite o código da corrida</span>
            </div>
        </div>

        <div className="fInputTxt">
          <label htmlFor="inp" className="inp">
            <input type="password" id="inp" placeholder="Código" pattern=".{6,}" required></input>
            <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
            </svg>
            <svg width="14px" height="12px" viewBox="0 0 14 12" className="check">
                <path d="M1 7 5.5 11 L13 1"></path>
            </svg>
          </label>
          <NavUnlisted>
            <button className="btn-enter">
              <Link style={linkStyle} to="/scan">Entrar</Link>
            </button>
          </NavUnlisted>
        </div>
    </header>
    <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
    </footer>
  </>
}

function Scan(){
  return <>
    <header className="wave">
    <div className="headline">
            <h1>Começar</h1>
            <div className="subtitle">
                <span>Siga para o próximo ponto</span>
            </div>
            
        </div>
    <div className="fInputTxt">
    <NavUnlisted>
            <button className="btn-enter">
              <Link style={linkStyle} to="/quiz">next</Link>
            </button>
          </NavUnlisted>
              <div className="central">
                <svg width="180" height="178" viewBox="0 0 180 178" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="180" height="178" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_235_1092" transform="translate(-0.0882353 -0.0978723) scale(0.00229779 0.00232713)"/>
                </pattern>
                <image id="image0_235_1092" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
                </defs>
                </svg>
              </div>
          
    </div>
    </header>
    <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
    </footer>
  </>
}

function Quiz(){
  const onSubmit = () => { //colocar cooldown
    alert('submit data');
  }
  // colocar esqueleto e perguntas
  const step1Content = 
  <div className="back">
    <h1 className="questionTheme">
        Ciências Exata
      </h1>
    <div className="bg">
      <img src={exatas} className="imgMath"></img>
    </div>
    <div className="question">
      <h2 className="questionText">
        77 + 33 e 11 * 11 são respectivamente:
      </h2>
    </div>
    {/* <div className="alternatives">
      <div className="A"><h2 className='answers'>A - 100 e 121</h2></div>
      <div className="B"><h2 className='answers'>B - 120 e 111</h2></div>
      <div className="C"><h2 className='answers'>C - 110 e 122</h2></div>
      <div className="D"><h2 className='answers'>D - 110 e 121</h2></div>
    </div> */}
  </div>;
  const step2Content = 
  <div className="back">
    <h1 className="questionTheme">
        Ciências Humanas
      </h1>
    <div className="bg">
      <img src={humanas} className="imgHis"></img>
    </div>
    <div className="question">
      <h2 className="questionText">
        Qual estado Brasileiro é maior em extenção territorial?
      </h2>
    </div>
    {/* <div className="alternatives">
      <div className="A"><h2 className='answers'>A - Mato Grosso</h2></div>
      <div className="B"><h2 className='answers'>B - São Paulo</h2></div>
      <div className="C"><h2 className='answers'>C - Minas Gerais</h2></div>
      <div className="D"><h2 className='answers'>D - Amazonas</h2></div>
    </div> */}
  </div>;
  const step3Content = 
  <div className="back">
    <h1 className="questionTheme">
        Ciências Naturais
      </h1>
    <div className="bg">
      <img src={natura} className="imgNat"></img>
    </div>
    <div className="question">
      <h2 className="questionText">
      Quais são os cromossomos que determinam o sexo masculino?
      </h2>
    </div>
    <div className="alternatives">
      {/* <div className="A"><h2 className='answers'>A - XX</h2></div>
      <div className="B"><h2 className='answers'>B - XY</h2></div>
      <div className="C"><h2 className='answers'>C - Xx</h2></div>
      <div className="D"><h2 className='answers'>D - Yy</h2></div> */}
    </div>
  </div>;
  const step4Content = 
  <div className="back">
    <h1 className="questionTheme">
        Conhecimento Geral
      </h1>
    <div className="bg">
      <img src={geral} className="imgGeral"></img>
    </div>
    <div className="question">
      <h2 className="questionText">
        Qual dessas cidades recebem mais turistas estrangeiros?
      </h2>
    </div>
    {/* <div className="alternatives">
      <div className="A"><h2 className='answers'>A - Cuiabá</h2></div>
      <div className="B"><h2 className='answers'>B - Ceará</h2></div>
      <div className="C"><h2 className='answers'>C - Rio de Janeiro</h2></div>
      <div className="D"><h2 className='answers'>D - Balneário Camboriú</h2></div>
    </div> */}
  </div>;
  const step5Content = 
  <div className="back">
    <h1 className="questionTheme">
        Filosofia
      </h1>
    <div className="bg">
      <img src={filos} className="imgFil"></img>
    </div>
    <div className="question">
      <h2 className="questionText">
      Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?
      </h2>
    </div>
    {/* <div className="alternatives">
      <div className="A"><h2 className='answers'>A - A mitologia</h2></div>
      <div className="B"><h2 className='answers'>B - A filosofia</h2></div>
      <div className="C"><h2 className='answers'>C - A matematica</h2></div>
      <div className="D"><h2 className='answers'>D - A biologia</h2></div>
    </div> */}
  </div>;

//colocar acertos e erros
function step2Validator() {
  return true;
}

function step3Validator() {
  return true;
}
function onFormSubmit() {

}

  return <>
    <div className="app">
        <StepProgressBar
          startingStep={0}
          wrapperClass="progress-wrapper-custom"
          onSubmit={onSubmit}
          submitBtnName="Finalizar"
          previousBtnName="Voltar"
          nextBtnName="Ok"
          steps={[
            {
              label: '',
              name: 'step 1',
              content: step1Content
            },
            {
              label: '',
              name: 'step 2',
              content: step2Content,
            },
            {
              label: '',
              name: 'step 3',
              content: step3Content,
            },
            {
              label: '',
              name: 'step 4',
              content: step4Content
            },
            {
              label: '',
              name: 'step 5',
              content: step5Content
            }
          ]}
        />
      </div>
    </>
}
export default App
