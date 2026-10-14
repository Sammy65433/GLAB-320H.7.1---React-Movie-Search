## GLAB 320H.7.1 - React Movie Search
`July 22, 2026`
`Samuel Jacquet`

# MovieFinder

A responsive movie-search application built with React and Vite. Search by movie title to view information retrieved from the OMDb API.

**Live demo:** (https://frontend-react-movie-search.onrender.com)

## What I Built

I developed a search experience that connects a React interface to a third-party API. Users can enter a movie title and view its poster, release year, rating, runtime, genre, plot, director, cast, and IMDb rating when that information is available.

The project gave me hands-on practice with React component design, controlled forms, asynchronous API calls, environment configuration, and responsive styling.

## Features

- Search OMDb by movie title.
- Display movie details in a responsive card layout.
- Load a sample movie when the application opens.
- Show loading, no-result, API-error, and missing-poster states.
- Provide a labeled search field that works with a keyboard or mouse.

## Tech Stack

- React and Vite
- JavaScript and CSS
- OMDb API
- Fetch API

## How It Works

1. The search form stores the entered title in React state.
2. On submit, the app sends an HTTPS request to OMDb.
3. The API response is stored in state and rendered by the movie display component.
4. The UI shows a loading state while the request runs and a useful message if the search fails.

## Run Locally

```bash
npm install
```

Create a `.env` file in the project root:

```dotenv
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

Then run:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

The `.env.example` file documents the required variable without including a real key.

## Deployment Notes

This is a Vite frontend and can be deployed as a static site. On Render, use `npm run build` as the build command and `dist` as the publish directory. Set `VITE_OMDB_API_KEY` in Render’s environment settings before deployment.

**API key note:** Vite embeds `VITE_` variables in client-side code. This key is not private in a frontend-only deployment. A backend proxy would be needed if the key must remain secret.

## Challenges and Lessons

- Handling both HTTP errors and OMDb’s `"Response": "False"` result format.
- Keeping the interface useful when a movie has no poster or optional details.
- Preventing default form submission so results update without a page reload.
- Designing a layout that works on both desktop and mobile screens.

## Future Improvements

- Add a list of search results instead of returning only one title match.
- Let users save favorites locally or to an account.
- Add more detailed movie information and sorting options.
- Add automated tests for loading, error, and search-result states.
