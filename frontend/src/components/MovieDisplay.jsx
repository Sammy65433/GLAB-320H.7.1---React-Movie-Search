export default function MovieDisplay({ movie, loading, error }) {
  if (loading) {
    return (
      <div className="status-card" role="status">
        Searching for your movie...
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-card status-card--error" role="alert">
        {error}
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="status-card">
        Search for a movie to see its details.
      </div>
    );
  }

  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <article className="movie-card">
      <div className="poster-wrap">
        {hasPoster ? (
          <img
            className="movie-poster"
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
        ) : (
          <div className="poster-placeholder">Poster unavailable</div>
        )}
      </div>

      <div className="movie-details">
        <span className="eyebrow">Movie details</span>
        <h2>{movie.Title}</h2>

        <div className="movie-tags">
          {movie.Year && movie.Year !== "N/A" && <span>{movie.Year}</span>}
          {movie.Rated && movie.Rated !== "N/A" && <span>{movie.Rated}</span>}
          {movie.Runtime && movie.Runtime !== "N/A" && (
            <span>{movie.Runtime}</span>
          )}
        </div>

        {movie.Genre && movie.Genre !== "N/A" && (
          <p className="movie-genre">{movie.Genre}</p>
        )}

        {movie.Plot && movie.Plot !== "N/A" && (
          <p className="movie-plot">{movie.Plot}</p>
        )}

        <dl className="movie-facts">
          {movie.Director && movie.Director !== "N/A" && (
            <div>
              <dt>Director</dt>
              <dd>{movie.Director}</dd>
            </div>
          )}

          {movie.Actors && movie.Actors !== "N/A" && (
            <div>
              <dt>Cast</dt>
              <dd>{movie.Actors}</dd>
            </div>
          )}

          {movie.imdbRating && movie.imdbRating !== "N/A" && (
            <div>
              <dt>IMDb rating</dt>
              <dd>{movie.imdbRating}/10</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
