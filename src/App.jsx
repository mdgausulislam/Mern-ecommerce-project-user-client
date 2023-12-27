import './App.css';
import HomePage from './container/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './container/ProductList/ProductList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/:slug' element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
