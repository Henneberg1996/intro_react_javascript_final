
function MovieList ({title, rating, genre, movies, setTitle, setGenre, setRating}) {
  console.log("movies")
  console.log(movies)
  const updateMovies = async (idx) => {
      const newMovie = {
        "title": title != "" ? title : movies[idx]['title'], 
        "rating": rating != null ? rating : movies[idx]['rating'], 
        "genre": genre != "" ? genre : movies[idx]['genre']
      }
      const response = await fetch(`https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json`, 
      {
        method: 'PATCH',
        body: JSON.stringify(newMovie)
      }
      )
      setTitle("")
      setRating(null)
      setTitle("")
      if (response.ok){alert("success")} else alert("fail")
    }

    const deleteMovie = async (idx) => {

const response = await fetch(`https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/${idx}.json`, 
      {
        method: 'DELETE',
      }
      )
      if (response.ok){alert("success")} else alert("fail")


    }
    

    return(
        <div className="List">
        <div className="HeaderText" >  Movies & Ratings </div>
        <div style={{ display: 'flex', height: '10%',  width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}} >
          <div className="DictItemCenterLong" style={{alignSelf: 'end', fontWeight: '600'}}>Title</div>
          <div className="DictItemCenterShort" style={{alignSelf: 'end', fontWeight: '600'}}>Rating</div>
          <div className="DictItemCenter" style={{alignSelf: 'end', fontWeight: '600'}}>Genre</div>
      <div style={{width: '51%'}} className="DictItemCenter"/>
      </div>
          {movies && (
              movies.map((movie, idx) => {
                if(movies[idx] != null)
                {return (
                  <div key={idx} style={{ display: 'flex', height: '10%',  width: '100%', borderBottom: '1px solid black', justifyContent: 'space-around'}} >
                    <input onChange={(e) => setTitle(e.target.value)} placeholder={movie["title"]} defaultValue={movie["title"]} className="DictItemCenterLong" />
                    <input onChange={(e) => setRating(e.target.value)} placeholder={movie["rating"]} defaultValue={movie["rating"]} className="DictItemCenterShort" />
                    <input onChange={(e) => setGenre(e.target.value)} placeholder={movie['genre']} defaultValue={movie['genre']} className="DictItemCenter"/>
                  <button onClick={() => updateMovies(idx) } className="DictItemCenter">Change</button>
                  <button onClick={() => deleteMovie(idx) } className="DictItemCenter">Delete</button>
                </div>
                )}
              })
          )
          }
        </div>
    )

}
export default MovieList