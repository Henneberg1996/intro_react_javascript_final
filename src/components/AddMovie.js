function AddMovie({ titleAdd, ratingAdd, genreAdd, movies, setTitleAdd, setGenreAdd, setRatingAdd, setMovies }) {
  // Funktion til at tilføje en ny film til databasen
  const addMovie = async () => {
    // Opretter en ny film baseret på input-felterne
    const newMovie = { "title": titleAdd, "rating": ratingAdd, "genre": genreAdd };

    // Opretter en opdateret liste af film baseret på den eksisterende liste og den nye film
    const updatedMovies = movies !== null ? [...movies, newMovie] : [newMovie];

    // Nulstiller input-felterne
    setTitleAdd("");
    setGenreAdd("");
    setRatingAdd("");

    // Sender en PUT-anmodning til databasen med den opdaterede liste af film
    //Mit anvendte URL: https://testdb-7e328-default-rtdb.europe-west1.firebasedatabase.app/movies/.json
    //INDSÆT DIT EGET URL HER
    const response = await fetch(``, {
      method: 'PUT',
      body: JSON.stringify(updatedMovies)
    });

    // Viser en besked afhængigt af anmodningens succes og opdaterer filmene, hvis det er vellykket
    if (response.ok) {
      alert("success");
      setMovies(updatedMovies);
    } else {
      alert("fail");
    }
  };

  // Returnerer AddMovie-komponenten
  return (
    <div className="InputBox">
      {/* Overskrift for tilføjelse af film */}
      <div className="HeaderText">  Add movies </div>
      {/* Input-felter til titel, genre og rating med tilhørende knap til at tilføje film */}
      <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '90%', flexDirection: 'column' }}>
        <input onChange={(e) => setTitleAdd(e.target.value)} value={titleAdd} placeholder="Insert Title here" style={{ width: '60%', border: 'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }} />
        <input onChange={(e) => setGenreAdd(e.target.value)} value={genreAdd} placeholder="Insert Genre here" style={{ width: '60%', border: 'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }} />
        <input onChange={(e) => setRatingAdd(e.target.value)} value={ratingAdd} placeholder="Insert Rating here" style={{ width: '25%', border: 'none', borderBottom: '1px solid black', fontSize: '15px', margin: '5%' }} />
        <button onClick={addMovie} style={{ width: '50%', height: '40px', border: '1px solid black', fontSize: '15px', margin: '5%', justifyItems: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#61a4ad', color: 'white', fontSize: '15px' }}>Add movie</button>
      </div>
    </div>
  );
}

// Eksporterer AddMovie-komponenten som standard
export default AddMovie;
