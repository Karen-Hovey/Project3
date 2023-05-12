const Navigation = (props) => {
  console.log(props)
  return (
    <div className="Nav">
      <li>
        <Link to="Conference">{props.school.conference}</Link>
      </li>
      <li>
        <Link to="Rankings">{props.school.rank}</Link>
      </li>
    </div>
  )
}
export default Navigation
