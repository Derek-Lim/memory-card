export default function Card({ name, url }) {
  return (
    <div className="card">
      <img src={url} />
      <div>{name}</div>
    </div>
  )
}