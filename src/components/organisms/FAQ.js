import Question from "../molecules/Question";

const FAQ = ({ info }) => {
  return (
    <>
    <div className="accordion" id="accordionExample">
      {questions.map((info) => (
        <Question info={info.attributes} key={info.attributes.Question} />
      ))}
    </div>
    </>
  );
}

return {FAQ}