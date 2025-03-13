import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/modern.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
