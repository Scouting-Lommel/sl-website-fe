import Question from '../molecules/Question'

export default function FAQ({questions}){
    console.log(questions)
    return <div>{questions.map(info => <Question info={info.attributes} key={info.attributes.Question}/>)}</div>
}