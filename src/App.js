import { useState } from "react"
import "./App.css"

function App () {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(null)
  const [genre, setGenre] = useState("")
  const [movies, setMovies] = useState([
      {'title': 'Shawshank Redemption', "rating": 10, "genre": 'Drama' },
      {'title': 'Min søsters børn', "rating": 6, "genre": 'Komedie' },
      {'title': 'Ingloriuos Bastards', "rating": 10, "genre": 'Action' },
  ])

const updateMovies = (key) => {
  const updatedMovies = [...movies]
  updatedMovies[key]['title'] = title != '' ? title: updatedMovies[key]['title'] 
  updatedMovies[key]['rating'] = rating != null ? rating: updatedMovies[key]['rating'] 
  updatedMovies[key]['genre'] = genre != '' ? genre : updatedMovies[key]['genre'] 
  setMovies(updatedMovies)
  setTitle('')
  setRating(null)
  setGenre('')
  alert(movies[key]['title'] + " " + movies[key]['genre'] + " " + movies[key]["rating"] )
}


  return (
    <div className="Container">
        <div className="List">
          <div className="HeaderText" >  Movies & Ratings </div>
          <div style={{ display: 'flex', height: '10%',  width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}} >
            <div className="DictItemCenterLong" style={{alignSelf: 'end', fontWeight: '600'}}>Title</div>
            <div className="DictItemCenterShort" style={{alignSelf: 'end', fontWeight: '600'}}>Rating</div>
            <div className="DictItemCenter" style={{alignSelf: 'end', fontWeight: '600'}}>Genre</div>
        <div className="DictItemCenter"/>
        </div>
            {movies && (
                movies.map((movie, idx) => {
                  return (
                    <div key={idx} style={{ display: 'flex', height: '10%',  width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}} >
                      <input onChange={(e) => setTitle(e.target.value)}  defaultValue={movie["title"]} className="DictItemCenterLong" />
                      <input onChange={(e) => setRating(e.target.value)} defaultValue={movie["rating"]} className="DictItemCenterShort" />
                      <input onChange={(e) => setGenre(e.target.value)} defaultValue={movie['genre']} className="DictItemCenter"/>
                    <button onClick={() => updateMovies(idx)} className="DictItemCenter">Change</button>
                  </div>
                  )
                })
            )
            }
          </div>
        </div>
  )

}

export default App