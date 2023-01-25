import "./smallpost.css"

export default function SmallPost() {
  return (

    <div className="minipost">
      <h2 className="title">"Title Post"</h2>
      <div className="lefttext">
        <h4 className="author">"Author"</h4>
        <h4 className="date">"Date Posted"</h4>
      </div>
      <div className="stats">
        <h4 className="stat1">"0"</h4>
        <h4 className="stat2">"0"</h4>
        <h4 className="stat3">"0"</h4>
      </div>
    </div>
  )
}