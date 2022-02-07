import Question from '../molecules/Question'

export default function FAQ({questions}){
    // return <div>{questions.map(info => <Question info={info.attributes} key={info.attributes.Question}/>)}</div>
    return(
        <div className="accordion" id="accordionExample">
            {questions.map(info => <Question info={info.attributes} key={info.attributes.Question}/>)}
        </div>
    )
}