import './App.css'
import Header from './components/Header/Header'
import HomePage from './container/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuHeader from './components/MenuHeader/MenuHeader';

function App() {
  return (
    <div>
      <Header />
      <MenuHeader />
      <HomePage />

    </div>
  )
}

export default App
