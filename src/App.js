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

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true); // Start loading
      try {
        const res = await apiService.get(`3/discover/movie`);
        setMovies(res.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
      setLoading(false); // End loading
    };

    getMovies();
  }, []);

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
  console.log(movies.results);
  console.log(genres);

  return (
    <div>
      <ThemeProvider>
        <HomeLayout>
          <SideBar genres={genres.genres} />
          <DisplayPanel movies={movies.results} genres={genres.genres} />
        </HomeLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
