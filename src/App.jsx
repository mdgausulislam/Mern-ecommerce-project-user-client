import './App.css';
import HomePage from './container/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './container/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/actions/authActions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  
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
