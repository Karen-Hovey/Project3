import './App.css'
import schoolArray from './schools.json'
import School from './components/School'

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
    </div>
  )
}

export default App
