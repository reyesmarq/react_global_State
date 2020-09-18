import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Section from './components/Section';
import { useStore } from './store';

function App() {
  const {
    state: { user, age },
  } = useStore();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <p>
            username:
            {user && user.username ? user.username : null}
          </p>
          <p>
            age:
            {age && age.age ? age.age : null}
          </p>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
