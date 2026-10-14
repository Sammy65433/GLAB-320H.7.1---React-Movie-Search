import { useState } from "react";

export default function Form({ moviesearch, loading }) {
  const [searchterm, setSearchterm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = searchterm.trim();
    if (!title) return;

    moviesearch(title);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <label htmlFor="movie-search">Movie title</label>

      <div className="search-controls">
        <input
          id="movie-search"
          type="search"
          name="searchterm"
          value={searchterm}
          onChange={(event) => setSearchterm(event.target.value)}
          placeholder="Try Inception, The Matrix, or Black Panther"
          autoComplete="off"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search movie"}
        </button>
      </div>
    </form>
  );
}
