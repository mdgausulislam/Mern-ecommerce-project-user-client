import './App.css';
import HomePage from './container/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './container/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/actions/authActions';
import ProductDetailsPage from './container/ProductDetailsPage/ProductDetailsPage';
import CartPage from './container/CartPage/CartPage';
import { updateCart } from './redux/actions/cartAction';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart())
  }, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
          <Route path="/:slug" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

