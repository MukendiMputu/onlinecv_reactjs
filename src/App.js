import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <header>
          <h2><a href="#">Mukendi Mputu</a></h2>
          <nav>
            <li><a href="#">CV</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </nav>
        </header>

        <section className="hero">
          <div className="background-image" style={{backgroundImage: "url(assets/img/mountains.jpg)"}}></div>
          <div className="hero-content-area">
            <h1>Hello, I'm Mukendi</h1>
            <h3>Bachelor of Computer Science</h3>
            <a href="#" className="btn">Contact Me</a>
          </div>
        </section>
      </div>
  );
}

export default App;
