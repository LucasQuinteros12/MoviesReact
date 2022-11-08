import styles from "./App.module.css";
import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { FaArrowLeft } from "react-icons/fa";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
          
        </Link>
        <div className="arrowContainer">
          <Link to="/">
            <FaArrowLeft className="arrowMain" size={25}/>
          </Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />}/>
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </main>
    </Router>
  );
}
