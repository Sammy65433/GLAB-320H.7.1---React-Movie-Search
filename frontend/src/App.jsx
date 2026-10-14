import { useEffect, useState } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getMovie = async (searchTerm) => {
    if (!apiKey) {
      setError("The movie API key has not been configured.");
      setMovie(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        apikey: apiKey,
        t: searchTerm,
        plot: "short",
      });

      const response = await fetch(`https://www.omdbapi.com/?${params}`);

      if (!response.ok) {
        throw new Error("The movie service is unavailable. Please try again.");
      }

      const data = await response.json();

      if (data.Response === "False") {
        setMovie(null);
        setError(data.Error || "No movie found with that title.");
        return;
      }

      setMovie(data);
    } catch (err) {
      setMovie(null);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie("Inception");
  }, []);

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-icon" aria-hidden="true">▶</span>
          <span>MovieFinder</span>
        </div>
        <span className="header-note">Find your next watch</span>
      </header>

      <section className="hero-section" aria-labelledby="page-title">
        <p className="eyebrow">Explore the movies</p>
        <h1 id="page-title">
          A great movie starts <span>with a search.</span>
        </h1>
        <p className="hero-description">
          Look up a film and explore its poster, plot, cast, and key details.
        </p>

        <Form moviesearch={getMovie} loading={loading} />
      </section>

      <section className="results-section" aria-label="Movie search result">
        <MovieDisplay movie={movie} loading={loading} error={error} />
      </section>

      <footer className="app-footer">
        Movie information provided by OMDb.
      </footer>
    </main>
  );
}
