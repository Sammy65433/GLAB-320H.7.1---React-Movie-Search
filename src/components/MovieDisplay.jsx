





export default function MovieDisplay({ movie }) {
  // The component must return some JSX

  const loaded = () => {

  return (
    <>
  <h1>{movie.Title}</h1>
  <h2>{movie.Genre}</h2>
  <img src={movie.Poster} alt={movie.Title} />
  <h2>{movie.Year}</h2>
</>
  );
};

// if movie is null
const loading = () => {
    return <h1>No Movie Display</h1>
};

// if movie exist
return movie ? loaded() : loading();
}