import { useState } from "react"
import "./App.css"

function App () {
  const [name, setName] = useState('')
  const [age, setAge] = useState(null)
  const [persons, setPersons] = useState([
    {"name": "jesper", "age": 26},
    {"name": "Sara", "age": 90},
    {"name": "Torsten", "age": 22},
  ])

const updatePerson = (key) => {
  const updatedPersons = [...persons]
  updatedPersons[key]['name'] = name
  updatedPersons[key]['age'] = age
  setName('name')
  setAge('age')
  alert(persons[key]['name'] + persons[key]['age'])

}

  

  return (
    <div className="Container" >

        <div className="List">
          {persons && (
            persons.map((person, idx) => {
              return (
                <div className="DictListElement">
                <input onChange={(e) => setName(e.target.value) } placeholder={person['name']} className="DictItemCenter" />
                <input onChange={(e) => setAge(e.target.value)} placeholder={person['age']} className="DictItemCenter" />
                <button onClick={() => updatePerson(idx)}  > update person </button>
              </div>
              )
            })
          )}

        </div>


    </div>


  )

}

export default App