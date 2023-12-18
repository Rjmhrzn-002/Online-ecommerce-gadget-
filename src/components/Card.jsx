export default function Card(props) {
  return (
    <div className="bg-slate-400 rounded-md">
      <div>
        <img src={props.item.image} alt="img" />
      </div>
      <div>
        <h1>title:{props.item.title}</h1>
        <p>{props.item.desc}</p>
      </div>
    </div>
  );
}
