export default function ScoutsGazetArticle({ info }) {
  return (
    <div>
      <div>Title: {info.attributes.Title}</div>
      <div>PreviewText: {info.attributes.PreviewText}</div>
      <div>Date: {info.attributes.Date}</div>
      <div>ID: {info.id}</div>
    </div>
  );
}
