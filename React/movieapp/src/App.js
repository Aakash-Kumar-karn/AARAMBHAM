import "./App.css";
import Banner from "./Components/Banner";
import Favourites from "./Components/Favourites";
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Banner />
              <MovieList />
            </>
          }
        />
        <Route path="/favourties" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
