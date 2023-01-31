const PokeApiList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => {
        return <p key={p}>{p}</p>;
      })}
    </div>
  );
};

export default PokeApiList;
