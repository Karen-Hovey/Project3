import Conference from './Conference'

const School = (props) => {
  console.log(props)

  return (
    <div className="school">
      <a href={props.school.link}>
        <img src={props.school.logo} alt={props.school.schoolName} id="logo" />
      </a>
      <div id="info">
        <h1>{props.school.schoolName}</h1>
        <h3>Ranking: #{props.school.rank}</h3>
      </div>
      <div className="conference">
        {/* <h3>Conference: {props.school.conference}</h3> */}
        <Conference conference={props.school.conference} />
      </div>
    </div>
  )
}

export default School
