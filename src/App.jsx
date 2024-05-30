import './assets/style/style.scss';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import { Route, Routes } from 'react-router-dom';
import CharactersDetails from './pages/CharactersDetails';
import EpisodesDetails from './pages/EpisodesDetails';
import LocationDetails from './pages/LocationDetails';

function App() {
  const api = 'https://rickandmortyapi.com/api';

  return (
    <>
      <Routes>
        <Route path="/" element={<Characters api={api} />} />
        <Route path="/characters-details/:id" element={<CharactersDetails api={api} />} />
        <Route path="/locations" element={<Locations api={api} />} />
        <Route path="/location/:id" element={<LocationDetails api={api} />} />
        <Route path="/episodes" element={<Episodes api={api} />} />
        <Route path="/episode/:id" element={<EpisodesDetails api={api} />} />
      </Routes>
    </>
  );
}

export default App;
