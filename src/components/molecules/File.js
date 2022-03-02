export default function File({ info }) {
  return (
    <div className="text-center grid grid-rows-2">
      <div>Image</div>
      <div className="text-xl">{info.attributes.name}</div>
    </div>
  );
}
