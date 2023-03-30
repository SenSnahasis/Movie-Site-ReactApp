import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exect path='/' element={<Home/>} />
          <Route exect path='movie/:id' element={<MovieDetail/>} />
          <Route exect path='movies/:type' element={<MovieList/>} />
          <Route path='/*' element={<h2>Error page</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
