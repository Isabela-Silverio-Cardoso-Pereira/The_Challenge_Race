import React from 'react'

import humanas from "../assets/history.svg"
import exatas from "../assets/math2.svg"
import filos from "../assets/filo.svg"
import natura from "../assets/natura.svg"
import geral from "../assets/apollo.svg"

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";


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
            A<div className="simpleDiv"></div> aconteceu em 1822, e<br /><br /><div className="simpleDiv"></div> foi coroado imperador
            </h2>
        </div>
        <div className="alternatives">
            <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Independência do Brasil'</a>
            <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>D. Pedro I</a>
            <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>José Bonifácio</a>
            <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Barão de Mauá</a>
            <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Dia do fico</a>
            <a href="#" className="alternativeChild" id='answers' onClick={() => changeStyle()}>Revolta da armada</a>
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
        <div className="btnParent">
            <NavUnlisted>
                    <button className="btn-enter toWin">
                        <Link style={linkStyle} to="/congrats">toWin</Link>
                    </button>
            </NavUnlisted>
        </div>
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
export default Quiz