import './TrainPopup.css'

function TrainPopup({ routeName, color, destination, stops }) {
  return (
    <div className="rounded-box">
      <div className="inner-box">
        <div className="round-train-route-title" style={{ backgroundColor: color }}>
          {routeName}
        </div>
        <div className="destination-label">To {destination}</div>
      </div>

      {/* We pass the line color to the CSS as a variable */}
      <div className="stops" style={{ '--line-color': color }}>
        {stops.map((s) => (
          <div key={s.label} className={s.past ? 'stop past' : 'stop'}>
            <div className="dot"></div>
            <div className="stop-label">{s.label}</div>
            <div className="stop-name">{s.name}</div>
            <div className="stop-time">{s.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrainPopup