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
    const step1Content = <NavUnlisted></NavUnlisted>
    const step2Content = <NavUnlisted></NavUnlisted>
    const step3Content = <NavUnlisted></NavUnlisted>
    const step4Content = <NavUnlisted></NavUnlisted>
    const step5Content = 

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