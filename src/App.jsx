import './App.css'
import schoolArray from './schools.json'
import School from './components/School'
import Button from './components/Button'
import Navbar from './components/Navbar'

const App = () => {
  console.log(schoolArray)
  return (
    <div className="App">
      <Navbar />
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
