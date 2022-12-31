import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddThreadPage from './pages/AddThreadPage';
import DetailThreadPages from './pages/DetailThreadPage';
import HomePage from './pages/HomePage';
import Leaderboard from './pages/LeaderBoard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="app-container">
      <header className="py-6 px-10 md:px-40 bg-white">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/threads/create" element={<AddThreadPage />} />
          <Route path="/threads/:id" element={<DetailThreadPages />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
