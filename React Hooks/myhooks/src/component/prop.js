export default function prop({ name1 }) {
  return (
    <>
      {name1.map((item, id) => (
        <ul key={id}>
          <li>{item.name}</li>
        </ul>
      ))}
    </>
  );
}
