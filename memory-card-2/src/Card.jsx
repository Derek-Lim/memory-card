export default function Card({ name, url }) {
  return (
    <button
      className="card"
    >
      <img src={url} />
      <div>{name}</div>
    </button>
  )
}