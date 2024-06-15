export default function Heading({ score, bestScore }) {
  return (
    <div className="heading">
      <div className="sub-heading">
        <div id="title">AOT Memory Game</div>
        <div>Get points by clicking on an image 
          but don't click on any more than once.</div>
      </div>
      <div className="scoreboard">
        <div>Score: {score}</div>
        <div>Best score: {bestScore}</div>
      </div>
    </div>
  )
}
