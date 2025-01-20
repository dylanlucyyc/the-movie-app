import ThemeProvider from "./contexts/ThemeProvider";
import HomeLayout from "./layouts/HomeLayout";
import DisplayPanel from "./components/DisplayPanel";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import apiService from "./app/apiService";

function App() {
  const [movies, setMovies] = useState({});
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true); // Start loading
      try {
        let url = `3/discover/movie?language=en-US&page=${currentPage}&sort_by=popularity.desc`;

        if (selectedGenreId) {
          setQuery("");
          url += `&with_genres=${selectedGenreId}`;
        }

        if (query) {
          setSelectedGenreId();
          url = `3/search/movie?query=${query}`;
        }

        const res = await apiService.get(url);
        setMovies(res.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
      setLoading(false); // End loading
    };

    getMovies();
  }, [currentPage, selectedGenreId, query]);

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true); // Start loading
      try {
        const res = await apiService.get(`3/genre/movie/list`);
        setGenres(res.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
      setLoading(false); // End loading
    };

    getGenres();
  }, []);

  useEffect(() => {
    setTotalPages(movies.total_pages);
  }, [movies.total_pages]);

  return (
    <div>
      <ThemeProvider>
        <HomeLayout query={query} setQuery={setQuery}>
          <SideBar
            genres={genres.genres}
            selectedGenreId={selectedGenreId}
            setSelectedGenreId={setSelectedGenreId}
          />
          <DisplayPanel
            movies={movies.results}
            genres={genres.genres}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </HomeLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
