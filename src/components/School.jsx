import Conference from './Conference'

const School = (props) => {
  console.log(props)

  return (
    <div className="school">
      <img src={props.school.logo} alt={props.school.schoolName} id="logo" />
      <div id="info">
        <h1>{props.school.schoolName}</h1>
        <h3>Ranking:{props.school.rank}</h3>
      </div>
      <div className="conference">
        {props.school.conference.map((conference) => (
          <Conference conference={conference} />
        ))}
      </div>
    </div>
  )
}

export default School
