
function AddMovie ({titleAdd, ratingAdd, genreAdd, movies, setTitleAdd, setGenreAdd, setRatingAdd, setMovies}) {

    const addMovie = async () => {
        const newMovie = {"title": titleAdd, "rating": ratingAdd, "genre": genreAdd}
        const updatedMovies = movies != null ? [...movies, newMovie] : [newMovie]
        setTitleAdd("")
        setGenreAdd("")
        setRatingAdd("")
  
        const response = await fetch(`https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/.json`, 
        {
          method: 'PUT',
          body: JSON.stringify(updatedMovies)
        }
        )

        if (response.ok)
        {
          alert("success")
          setMovies(updatedMovies)
      }

        else alert("fail")
      }
    return (
        <div className="InputBox"> 
        <div className="HeaderText">  Add movies </div>
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '90%', flexDirection:'column'}} >
        <input onChange={(e) => setTitleAdd(e.target.value)} value={titleAdd} placeholder="Insert Title here" style={{width:'60%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }}  />
        <input onChange={(e) => setGenreAdd(e.target.value)} value={genreAdd} placeholder="Insert Genre here" style={{width:'60%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }} />
        <input onChange={(e) => setRatingAdd(e.target.value)} value={ratingAdd} placeholder="Insert Rating here" style={{width:'25%', border:'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }} />
        <button onClick={addMovie} style={{width:'50%', height:'40px', border:'1px solid black', fontSize: '15px', margin: '5%', justifyItems: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#61a4ad', color: 'white', fontSize: '15px' }}>Add movie</button>
        </div>
          </div>
    )

}
export default AddMovie