import Question from "../molecules/Question";

const FAQ = ({ info }) => {
  console.log(info)
  return (
    <>
    <h1 className="text-5xl font-bold text-center py-3">{info.Title}</h1>
    <div className="accordion" id="accordionExample">
      {info.QenAs.data.map((QA, i) => (
        <Question info={QA.attributes} key={i} />
      ))}
    </div>
    </>
  );
}

export {FAQ}