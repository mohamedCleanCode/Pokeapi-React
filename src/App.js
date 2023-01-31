import axios from "axios";
import { useEffect, useState } from "react";
import PokeApiList from "./components/PokeApiList";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    axios
      .get(currentPage)
      .then((res) => {
        setPokemon(res.data.results.map((p) => p.name));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? "Loading....." : <PokeApiList pokemon={pokemon} />}
    </div>
  );
}

export default App;
