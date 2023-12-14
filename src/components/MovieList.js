function MovieList ({ title, rating, genre, movies, setTitle, setGenre, setRating, movieKeys }) {

  // Funktion til at opdatere en film i databasen
  const updateMovies = async (idx) => {
    // Opretter en ny film med enten de nye input-værdier eller de eksisterende værdier fra den valgte film
    const newMovie = {
      "title": title !== "" ? title : movies[idx]['title'],
      "rating": rating !== null ? rating : movies[idx]['rating'],
      "genre": genre !== "" ? genre : movies[idx]['genre']
    }

    // Sender en PATCH-anmodning til databasen med den nye film
    //Mit anvendte URL: https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json
    //INDSÆT DIT EGET URL HER
    const response = await fetch(`https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json`,
      {
        method: 'PATCH',
        body: JSON.stringify(newMovie)
      }
    )

    // Nulstiller input-felterne og viser en besked afhængigt af anmodningens succes
    setTitle("")
    setRating(null)
    setTitle("")
    if (response.ok) {
      alert("success")
    } else {
      alert("fail")
    }
  }

  // Funktion til at slette en film fra databasen
  const deleteMovie = async (idx) => {
    //Sender en DELETE-anmodning til databasen for at slette filmen
    //Mit anvendte URL: https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json
    //INDSÆT DIT EGET URL HER
    const response = await fetch(`https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}/.json`,
      {
        method: 'DELETE',
      }
    )

    // Viser en besked afhængigt af anmodningens succes
    if (response.ok) {
      alert("success")
    } else {
      alert("fail")
    }
  }

  // Returnerer MovieList-komponenten
  return (
    <div className="List">
      {/* Overskrift for filmlisten */}
      <div className="HeaderText" > Movies & Ratings </div>
      {/* Header-row med kolonnenavne */}
      <div style={{ display: 'flex', height: '10%', width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around' }} >
        <div className="DictItemCenterLong" style={{ alignSelf: 'end', fontWeight: '600' }}>Title</div>
        <div className="DictItemCenterShort" style={{ alignSelf: 'end', fontWeight: '600' }}>Rating</div>
        <div className="DictItemCenter" style={{ alignSelf: 'end', fontWeight: '600' }}>Genre</div>
        <div style={{ width: '51%' }} className="DictItemCenter" />
      </div>
      {/* Mapper igennem filmene og viser dem i rækker med redigerings- og sletknapper */}
      {movies && (
        movies.map((movie, idx) => {
          if (movies[idx] != null) {
            return (
              <div key={idx} style={{ display: 'flex', height: '10%', width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around' }} >
                {/* Input-felter med placeholder og defaultværdier fra filmen */}
                <input onChange={(e) => setTitle(e.target.value)} placeholder={movie["title"]} defaultValue={movie["title"]} className="DictItemCenterLong" />
                <input onChange={(e) => setRating(e.target.value)} placeholder={movie["rating"]} defaultValue={movie["rating"]} className="DictItemCenterShort" />
                <input onChange={(e) => setGenre(e.target.value)} placeholder={movie['genre']} defaultValue={movie['genre']} className="DictItemCenter" />
                {/* Knapper til at opdatere eller slette filmen */}
                <button onClick={() => updateMovies(idx)} className="DictItemCenter">Change</button>
                <button onClick={() => deleteMovie( movieKeys[idx])} className="DictItemCenter">Delete</button>
              </div>
            )
          }
        })
      )}
    </div>
  )
}

// Eksporterer MovieList-komponenten som standard
export default MovieList
