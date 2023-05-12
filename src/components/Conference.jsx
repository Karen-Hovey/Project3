const Conference = (props) => {
  let colorVariable

  switch (props.school.conference) {
    case 'UAA':
      colorVariable = 'blue'
      break
    case 'Big Ten':
      colorVariable = 'red'
      break
    case 'SEC':
      colorVariable = 'yellow'
      break
    case 'Ivy League':
      colorVariable = 'orange'
      break
    case 'PAC-12':
      colorVariable = 'pink'
      break
    case 'ACC':
      colorVariable = 'lavender'
      break
    case 'Big 12':
      colorVariable = 'dodgerblue'
      break
    case 'Atlantic 10':
      colorVariable = 'darkviolet'
      break
    default:
      colorVariable = 'purple'
  }

  return (
    <div>
      <h3 style={{ backgroundColor: colorVariable, color: '#000000' }}>
        {props.conference}
      </h3>
    </div>
  )
}
export default Conference
