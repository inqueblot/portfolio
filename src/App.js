import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from "./pages/index";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import NavBar from "./components/navbar";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
