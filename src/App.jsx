import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Meta from './pages/Meta';
import Vault from './pages/Vault';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
    </Router>
  );
}

export default App;

