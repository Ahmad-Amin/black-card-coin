import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
