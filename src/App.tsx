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
import  {useState} from 'react';
import { Card, CardContent, Grid} from '@material-ui/core';
import QrReader from 'react-qr-reader';


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
          <Route path="/congrats" element={<Congrats/>}></Route>
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

  const [scanResultWebCam, setScanResultWebCam] =  useState('');

  const handleErrorWebCam = (error: any) => {
    console.log(error);
  }
  const handleScanWebCam = (result: any) => {
    if (result){
        setScanResultWebCam(result);
    }
  }



  return <>
    <header className="wave">
    <div className="headline">
            <h1>Começar</h1>
            <div className="subtitle">
                <span>Vá para o ponto</span>
            </div>
            
        </div>
    <div className="fInputTxt">
    
              <div className="central">
          <Card>
              <CardContent>
                  <Grid container spacing={2}>
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <QrReader
                        delay={300}
                        style={{width: '100%'}}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                        />
                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
              </div>

              <NavUnlisted>
            <button className="btn-enter">
              <Link style={linkStyle} to="/quiz">next</Link>
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


function Quiz(){
  function changeStyle(): void{
    var element = window.document.getElementById("myDiv");
    if (element === null) {

    } else {
      // since you've done the nullable check
      // TS won't complain from this point on
      element.style.backgroundColor = "#00FF00";
    }
    
}
  const onSubmit = () => { //colocar cooldown
    // var element = document.getElementsByClassName('elem')as HTMLCollectionOf<HTMLElement>;
    // console.log(element);
    // element[0].style.display = 'block';
  
    
  }
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
    <div className="alternatives">
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A - 100 e 121</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>B - 120 e 111</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>C - 110 e 122</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>D - 110 e 121</a>
    </div>
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
    <div className="alternatives">
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A - Mato Grosso</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>B - São Paulo</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>C - Minas Gerais</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>D - Amazonas</a>
    </div>
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
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A - XX</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>B - XY</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>C - Xx</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>D - Yy</a>
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
    <div className="alternatives">
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A - Cuiabá</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>B - Ceará</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>C - Rio de Janeiro</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>D - Balneário Camboriú</a>
    </div>
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
      <div className="alternatives">
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A - A mitologia</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>B - A filosofia</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>C - A matematica</a>
      <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>D - A biologia</a>
      </div>

      <NavUnlisted>
            <button className="btn-enter">
              <Link style={linkStyle} to="/congrats">Entrar</Link>
            </button>
      </NavUnlisted>
  </div>;

//colocar acertos e erros

function validator(){

return true

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
          nextBtnName="OK"
          steps={[
            {
              label: '',
              name: 'step 1',
              content: step1Content,
              validator: validator
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
              content: step5Content,
              
            }
          ]}
        />
      </div>
    </>
}

function Congrats(){

  return <>
  <header className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>

        <NavUnlisted>
            <button className="btn-enter">
              <Link style={linkStyle} to="/">Entrar</Link>
            </button>
        </NavUnlisted>
  </header>

  <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
    </footer>
  </>
}
export default App;


