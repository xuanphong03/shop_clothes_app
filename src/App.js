import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './features/Home';
import Products from './features/Products';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
