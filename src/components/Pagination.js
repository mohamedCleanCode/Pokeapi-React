const Pagination = ({ toPrevPage, toNextPage }) => {
  return (
    <div>
      {toPrevPage && <button onClick={toPrevPage}>Prev</button>}

      <button onClick={toNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
