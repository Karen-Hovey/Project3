import Conference from './Conference'

const School = (props) => {
  console.log(props)

  return (
    <div className="school">
      <img src={props.schools.logo} alt={props.schools.schoolName} id="logo" />
      <div id="info">
        <h1>{props.schools.schoolName}</h1>
        <h3>Ranking:{props.schools.rank}</h3>
      </div>
      <div className="conference">
        {props.schools.conference.map((conference) => (
          <Conference conference={conference} />
        ))}
      </div>
    </div>
  )
}
