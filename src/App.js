// Importerer nødvendige React-hooks og komponenter
import { useEffect, useState } from "react"
import "./App.css"
import MovieList from "./components/MovieList"
import AddMovie from "./components/AddMovie"

// Definerer hovedkomponenten App
function App () {
  // State-variabler til at håndtere inputfelter og filmlisten
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(null)
  const [genre, setGenre] = useState("")
  const [movies, setMovies] = useState([])
  const [movieKeys, setKeys] = useState([])
  const [titleAdd, setTitleAdd] = useState('')
  const [ratingAdd, setRatingAdd] = useState(null)
  const [genreAdd, setGenreAdd] = useState("")

  // useEffect-hook til at hente filmlisten fra databasen, når movies-state ændres
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies.json")
      const data = await response.json()
      if (data){
        setMovies(Object.values(data))
        setKeys(Object.keys(data))
      } else {
        setMovies([])
        setKeys([])
      }
    }

    fetchMovies()

  }, [movies]) // dependencies-array sikrer, at useEffect kun kører, når movies-state ændres

  console.log("movieKeys")
  console.log(movieKeys)


  // Returnerer hovedkomponentens JSX-struktur
  return (
    <div className="Container">
      {/* Indsætter AddMovie-komponenten med nødvendige props */}
      <AddMovie
        titleAdd={titleAdd}
        genreAdd={genreAdd}
        ratingAdd={ratingAdd}
        movies={movies}
        setGenreAdd={setGenreAdd}
        setTitleAdd={setTitleAdd}
        setRatingAdd={setRatingAdd}
        setMovies={setMovies}
      />
      {/* Indsætter MovieList-komponenten med nødvendige props */}
      <MovieList
        title={title}
        genre={genre}
        rating={rating}
        movies={movies}
        movieKeys = {movieKeys}
        setGenre={setGenre}
        setTitle={setTitle}
        setRating={setRating}
      />
    </div>
  )
}

// Eksporterer App-komponenten som standard
export default App
