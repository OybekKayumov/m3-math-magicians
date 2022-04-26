import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <section className="work-place">
            <Routes>
              <Route
                path="/math-magicians"
                element={<Home />}
              />
              <Route
                path="/Calculator"
                element={<Calculator className="calculator" />}
              />
              <Route
                path="/Quote"
                element={<Quote />}
              />
            </Routes>
          </section>

        </Router>
      </>
    );
  }
}

export default App;

/* <Calculator className="calculator" /> */
