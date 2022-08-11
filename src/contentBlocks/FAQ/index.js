import Question from "@/components/molecules/Question";

const FAQ = ({ Title, QenAs }) => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center py-3">{Title}</h1>
      <div className="accordion" id="accordionExample">
        {QenAs.data.map((QA, i) => (
          <Question info={QA.attributes} key={"QenA" + i} />
        ))}
      </div>
    </>
  );
};

export default FAQ;
