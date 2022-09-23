import perguntas from '../data/perguntas'
import exatas from '../assets/math2.svg'

export default function Generator() {

    // const getRandomQuestion = async () => {
    //     const req = await fetch('../../deleteme/perguntas.json')
    //     const res = await req.json()
    //     return res
        
    // }
    // const questionTheme = document.querySelector('.questionTheme') as  HTMLElement
    
    // const questionItSelf = document.querySelector('.questionText') as HTMLElement
    
    // const alternativesItSelf = document.querySelector('.alternativeChild') as HTMLElement
    
    // const firstAlternative = document.querySelector('#A') as HTMLElement
    // const secondAlternative = document.querySelector('#B') as HTMLElement
    // const thirdAlternative = document.querySelector('#C') as HTMLElement
    // const fourthAlternative = document.querySelector('#D') as HTMLElement

    // const btnGetQuestion = document.querySelector('btn-enter-startQuiz')

    
    // btnGetQuestion?.addEventListener('click', () => {
    //     getRandomQuestion().then(data => { 
    //         console.log(data.questionTheme)
    //         questionTheme.innerText = data.questionTheme
    //         questionItSelf.innerText = `${data.questionContent}`
    //         firstAlternative.innerText = `${data.alternatives.a}`
    //         secondAlternative.innerText = `${data.alternatives.b}`
    //         thirdAlternative.innerText = `${data.alternatives.b}`
    //         fourthAlternative.innerText = `${data.alternatives.c}`

    //         localStorage.setItem('questionText', data.questionContent)
    //         localStorage.setItem('alternativeChild', data.alternatives)
    //         localStorage.setItem('A', data.alternatives.a)
    //         localStorage.setItem('B', data.alternatives.b)
    //         localStorage.setItem('C', data.alternatives.c)
    //         localStorage.setItem('D', data.alternatives.d)

    //     })
    // })

    // window.onload = () => {
    //     const questionThemeData = localStorage.getItem('questionTheme')
    //     const questionItSelfData = localStorage.getItem('questionText')
    //     const alternativesItSelfData = localStorage.getitem('alternativeChild')
    //     const firstAlternativeData = localStorage.getitem('A')
    //     const secondAlternativeData = localStorage.getitem('B')
    //     const thirdAlternativeData = localStorage.getitem('C')
    //     const fourthAlternativeData = localStorage.getitem('D')

    //     if (questionItSelfData) {
    //         questionTheme.innerText = `${questionThemeData}`
    //         questionItSelf.innerText = questionItSelfData
    //         questionItSelf.style.quotes = 'initial'
    //         alternativesItSelf.innerText = `${alternativesItSelfData}`
    //         firstAlternative.innerText = `${firstAlternativeData}`
    //         secondAlternative.innerText = `${secondAlternativeData}`
    //         thirdAlternative.innerText = `${thirdAlternativeData}`
    //         fourthAlternative.innerText = `${fourthAlternativeData}`

            
    //     }
    //     return
    // }
    
    // function changeStyle(): void{
    //     var element = window.document.getElementById("myDiv");
    //     if (element === null) {
    
    //     } else {
    //       // since you've done the nullable check
    //       // TS won't complain from this point on
    //     element.style.backgroundColor = "#00FF00";
    //     }
        
    // }

    // return <>
    
    // {
        
    //     perguntas.map( pergunta => {
    //         return(
    //             <div className="back">
    //     <h1 className="questionTheme">
    //         {pergunta.questionTheme}
    //     </h1>
    //     <div className="bg">
    //         <img src={exatas} className="imgMath"></img>
    //     </div>
    //     <div className="question">
    //         <h2 className="questionText">
    //         {pergunta.questionContent}
    //         </h2>
    //     </div>
    //     <div className="alternatives">
    //         <a href="#" className="alternativeChild" id='A' onClick={() => changeStyle()}>{pergunta.a}</a>
    //         <a href="#" className="alternativeChild" id='B' onClick={() => changeStyle()}>{pergunta.b}</a>
    //         <a href="#" className="alternativeChild" id='C' onClick={() => changeStyle()}>{pergunta.c}</a>
    //         <a href="#" className="alternativeChild" id='D' onClick={() => changeStyle()}>{pergunta.d}</a>
    //     </div>
    // </div>
    //         )
    //     })
    // }
    // </>

    return <></>
}