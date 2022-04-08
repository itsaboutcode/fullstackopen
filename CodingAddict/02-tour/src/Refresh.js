const Refresh = ({ fetchTours }) => {
  console.log(fetchTours);
  return (
    <>
      <div className="loading">
        <h2>no tours left</h2>
        <button
          className="btn"
          onClick={() => {
            fetchTours();
          }}
        >
          refresh
        </button>
      </div>
    </>
  );
};

export default Refresh;
