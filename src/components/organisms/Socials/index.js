import Social from "@/components/molecules/Social";

const Socials = ({ info }) => {
  return (
    <>
      <div className="flex flex-row">
        {info.data.map((soc, i) => {
          return <Social key={"SOCC" + i} args={soc} />;
        })}
      </div>
    </>
  );
};

export { Socials };
