import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import PokeApiList from "./components/PokeApiList";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemon(res.data.results.map((p) => p.name));
        setPrevPage(res.data.previous);
        setNextPage(res.data.next);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    return () => {
      cancel();
    };
  }, [currentPage]);

  const toPrevPage = () => {
    setCurrentPage(prevPage);
  };
  const toNextPage = () => {
    setCurrentPage(nextPage);
  };

  return (
    <div className="App">
      {loading ? "Loading....." : <PokeApiList pokemon={pokemon} />}
      <Pagination
        toPrevPage={prevPage ? toPrevPage : null}
        toNextPage={nextPage ? toNextPage : null}
      />
    </div>
  );
}

export default App;
