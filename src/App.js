import Carousel from "./components/Carousel";
import Header from "./components/Header";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Carousel />
      </ThemeProvider>
    </div>
  );
}

export default App;
