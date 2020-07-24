import React from 'react';
import {BrowserRouter as Router,
  Route, HashRouter 
  } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage';
import ProjectList from './pages/ProjectListPage';
import ContactPage from './pages/ContactPage';
import ProjectPages from './pages/ProjectPage'
import Navbar from './navbar';
import Footer from './footer'


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <div id="page-body">
     <HashRouter path="/" component={Homepage} exact/>
     <HashRouter path="/projects" component={ProjectList} exact/>
     <Route path="/contact" component={ContactPage} exact/>
     <Route path="/page/:name" component={ProjectPages} exact/>
     </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
