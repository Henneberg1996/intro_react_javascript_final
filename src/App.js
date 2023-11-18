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

const updateMovies = (idx, key, value) => {
  const updatedMovies = [...movies]
  updatedMovies[idx][key] = value
  setMovies(updatedMovies)

}


  return (
    <div className="Container">
       <div className="InputBox"> 
        <div className="HeaderText">  Add movies </div>
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '90%', flexDirection:'column'}} >
        <input onChange={(e) => setTitle(e.target.value)}  placeholder="Insert Title here" style={{width:'60%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }}  />
        <input onChange={(e) => setRating(e.target.value)} placeholder="Insert Genre here" style={{width:'60%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }}  />
        <input onChange={(e) => setGenre(e.target.value)} placeholder="Insert Rating here" style={{width:'25%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }}  />
        <button style={{width:'50%', height:'40px', border:'1px solid black', fontSize: '15px', margin: '5%', justifyItems: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#61a4ad', color: 'white', fontSize: '15px' }}>Add movie</button>
        </div>
          </div>

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
                if(movies[idx] != null)
                {return (
                  <div key={idx} style={{ display: 'flex', height: '10%',  width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}} >
                    <input onChange={(e) => updateMovies(idx, 'title', e.target.value)} placeholder={movie["title"]} value={movie["title"]} className="DictItemCenterLong" />
                    <input onChange={(e) => updateMovies(idx, "rating", e.target.value)} placeholder={movie["rating"]} value={movie["rating"]} className="DictItemCenterShort" />
                    <input onChange={(e) => updateMovies(idx, "genre", e.target.value)} placeholder={movie['genre']} value={movie['genre']} className="DictItemCenter"/>
                  <button onClick={() => alert("Title: " + movies[idx]['title'] + " " + "Rating: " + " " + movies[idx]['rating'] + " " + "Genre: " + " " + movies[idx]['genre'])} className="DictItemCenter">Change</button>
                </div>
                )}
              })
          )
          }
        </div>
        </div>
  )

}

export default App