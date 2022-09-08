import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Kevin Son</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
