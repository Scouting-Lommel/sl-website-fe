import Question from "../molecules/Question";

const FAQ = ({ info }) => {
  return(<></>)
  console.log(info.Infos.data)
  return (
    <>
    <h1 className="text-5xl font-bold text-center">{info.Title}</h1>
    <div className="accordion" id="accordionExample">
      {info.Infos.data.map((QA, i) => (
        <Question info={QA.attributes} key={i} />
      ))}
    </div>
    </>
  );
}

export {FAQ}