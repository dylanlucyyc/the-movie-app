import ThemeProvider from "./contexts/ThemeProvider";
import HomeLayout from "./layouts/HomeLayout";
import DisplayPanel from "./components/DisplayPanel";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <ThemeProvider>
        <HomeLayout>
          <SideBar />
          <DisplayPanel />
        </HomeLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
