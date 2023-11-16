import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function Movie() {
  return (
    <div>
      <h2>영화 페이지</h2>
      {}
    </div>
  );
}

function TVProgram() {
  return (
    <div>
      <h2>TV 프로그램 페이지</h2>
      {}
    </div>
  );
}

function Person() {
  return (
    <div>
      <h2>인물 페이지</h2>
      {}
    </div>
  );
}
const pageStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/movies">영화</Link>
            </li>
            <li> 
              <Link to="/tv-programs">TV 프로그램</Link>
            </li>
            <li>
              <Link to="/people">인물</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/movies" element={<Movie />} />
          <Route path="/tv-programs" element={<TVProgram />} />
          <Route path="/people" element={<Person />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
