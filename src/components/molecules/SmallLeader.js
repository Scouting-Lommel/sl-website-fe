export default function SmallLeader({ info }) {
  const size = 2 + info.attributes.group_roles.data.length;
  return (
    <div className={"text-center grid grid-rows-" + size}>
      <div>Image</div>
      <div className="text-2xl">{info.attributes.FirstName}</div>
      {info.attributes.group_roles.data.map((role) => (
        <div key={role.attributes.Name}>{role.attributes.Name}</div>
      ))}
    </div>
  );
}
