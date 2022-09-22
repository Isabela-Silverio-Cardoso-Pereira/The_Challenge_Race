import quiz from '../../deleteme/perguntas.json'

export default function Generator() {
    const getRandomQuestion = async () => {
        const req = await fetch('../../deleteme/perguntas.json')
        const res = await req.json()
        return res
        
    }
    const questionTheme = document.querySelector('.questionTheme') as  HTMLElement
    
    const containerQuestion = document.querySelector('.question') as HTMLElement
    const questionItSelf = containerQuestion.querySelector('.questionText') as HTMLElement
    
    const alternatives = document.querySelector('.alternatives') as HTMLElement
    const alternativesItSelf = alternatives.querySelector('.alternativeChild') as HTMLElement
    
    const firstAlternative = alternatives.querySelector('#A') as HTMLElement
    const secondAlternative = alternatives.querySelector('#B') as HTMLElement
    const thirdAlternative = alternatives.querySelector('#C') as HTMLElement
    const fourthAlternative = alternatives.querySelector('#D') as HTMLElement

    const btnGetQuestion = document.querySelector('.btn-enter-startQuiz')

    interface selectProtected {
        readonly questionTheme: HTMLHeadingElement

        readonly containerQuestion: HTMLDivElement
        readonly questionItSelf: HTMLHeadingElement

        readonly alternatives: HTMLDivElement
        readonly alternativesItSelf: HTMLAnchorElement

        readonly firstAlternative: HTMLDivElement
        readonly secondAlternative: HTMLDivElement
        readonly thirdAlternative: HTMLDivElement
        readonly fourthAlternative: HTMLDivElement

        readonly btnGetQuestion: HTMLButtonElement
    }
    const selectProtected: selectProtected = {
        questionTheme: document.createElement('h1'),

        containerQuestion: document.createElement('div'),
        questionItSelf: document.createElement('h2'),

        alternatives: document.createElement('div'),
        alternativesItSelf: document.createElement('a'),

        firstAlternative: document.createElement('div'),
        secondAlternative: document.createElement('div'),
        thirdAlternative: document.createElement('div'),
        fourthAlternative: document.createElement('div'),

        btnGetQuestion: document.createElement('button')
    }
    btnGetQuestion?.addEventListener('click', () => {
        getRandomQuestion().then(data => { 
            questionTheme.innerText = `${data.questionTheme}`
            questionItSelf.innerText = `${data.questionContent}`
            firstAlternative.innerText = `${data.alternatives.a}`
            secondAlternative.innerText = `${data.alternatives.b}`
            thirdAlternative.innerText = `${data.alternatives.b}`
            fourthAlternative.innerText = `${data.alternatives.c}`

            localStorage.setItem('questionText', data.questionContent)
            localStorage.setItem('alternativeChild', data.alternatives)
            localStorage.setItem('A', data.alternatives.a)
            localStorage.setItem('B', data.alternatives.b)
            localStorage.setItem('C', data.alternatives.c)
            localStorage.setItem('D', data.alternatives.d)

        })
    })

    window.onload = () => {
        const questionItSelfData = localStorage.getItem('questionText')
        const alternativesItSelfData = localStorage.getitem('alternativeChild')
        const firstAlternativeData = localStorage.getitem('A')
        const secondAlternativeData = localStorage.getitem('B')
        const thirdAlternativeData = localStorage.getitem('C')
        const fourthAlternativeData = localStorage.getitem('D')

        if (questionItSelfData) {
            questionItSelf.innerText = questionItSelfData
            questionItSelf.style.quotes = 'initial'
            alternativesItSelf.innerText = `${alternativesItSelfData}`
            firstAlternative.innerText = `${firstAlternativeData}`
            secondAlternative.innerText = `${secondAlternativeData}`
            thirdAlternative.innerText = `${thirdAlternativeData}`
            fourthAlternative.innerText = `${fourthAlternativeData}`

            
        }
        return
    }
}