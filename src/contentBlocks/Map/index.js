import Map from "@/components/organisms/Map";

const MapBlock = ({ Title, Content, Coords }) => {
  const data = { Title, Content, Coords };

  return <Map info={data} />;
};

export default MapBlock;
