const Shimmer = () => {
  return (
    <div className="resturants-list flex flex-wrap justify-center">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
