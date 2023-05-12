import './App.css'
import schoolArray from './schools.json'
import School from './components/School'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Navigation from './components/Navigation'

const App = () => {
  console.log(schoolArray)
  return (
    <div className="App">
      <h1>Top Marketing Programs in the US</h1>
      <main>
        {schoolArray.map((school) => (
          <School key={school.schoolName} school={school} />
        ))}
      </main>
      <Button />
    </div>
  )
}

export default App
