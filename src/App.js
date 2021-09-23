import "./App.css";
import { useState } from "react";
import { data } from "./data";
import MoviesList from "./Component/MoviesList";
import AddMovie from "./Component/AddMovie";
import Search from "./Component/Search";

function App() {
  const [movies, setMovies] = useState(data);
  const add = (newMovie) => setMovies([...movies, newMovie]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="topNav">
        <Search setSearch={setSearch} />
        <AddMovie add={add} />
      </div>
      <MoviesList movies={movies} search={search} />
    </div>
  );
}

export default App;
