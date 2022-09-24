import React from 'react'

import humanas from "../assets/history.svg"
import exatas from "../assets/math2.svg"
import filos from "../assets/filo.svg"
import natura from "../assets/natura.svg"
import geral from "../assets/astronaut.svg"

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import styled from "styled-components";
import {Link } from "react-router-dom";


function Quiz() {
    const NavUnlisted = styled.ul`
    text-decoration: none;
    `;
    const linkStyle = {
    color: '#fff',
    textDecoration: "none",
    
}
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
                Pedro olhou para seu despertador e disse que daqui a seis horas e meia seriam quatro horas da manhã. A que horas Pedro olhou para o despertador?
                </h2>
            </div>
            <div className="alternatives">
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>21h30</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>4h</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>20h</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>2h30</a>
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
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Mato Grosso</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>São Paulo</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Minas Gerais</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Amazonas</a>
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
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>XX</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>XY</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Xx</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Yy</a>
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
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Cuiabá</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Ceará</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Rio de Janeiro</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Balneário Camboriú</a>
            </div>
        </div>;
        const step5Content = 
        <div className="back">
            <h1 className="questionTheme">
                Ciências humanas
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
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A mitologia</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A filosofia</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A matematica</a>
                <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>A biologia</a>
            </div>
            {/* <div className="btnParent">
                <NavUnlisted>
                        <button className="btn-enter toWin">
                            <Link style={linkStyle} to="/congrats">toWin</Link>
                        </button>
                </NavUnlisted>
            </div> */}
        </div>;

        <div className="btnParent">
            <NavUnlisted>
                    <button className="btn-enter toWin">
                        <Link style={linkStyle} to="/congrats">toWin</Link>
                    </button>
            </NavUnlisted>
        </div>
    
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
export default Quiz