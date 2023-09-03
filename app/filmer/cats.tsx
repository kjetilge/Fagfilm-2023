export default function Cats(props)  {
  return (
    <div>
      <h1>Cats</h1>
      <p>Meow</p>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}