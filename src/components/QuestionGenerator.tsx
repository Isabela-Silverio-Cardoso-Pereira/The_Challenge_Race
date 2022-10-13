import perguntas from '../data/perguntas'
import exatas from '../assets/math2.svg'
import  Axios  from 'axios'

export async function Generator () {
    return Axios
    .get('../data/perguntas')
    .then((res: { data: any }) => res.data)
}


