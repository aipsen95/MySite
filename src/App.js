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
    <HashRouter>
    <div className="App">
    <Navbar/>
     <div id="page-body">
     <Route path="/#" component={Homepage} exact/>
     <Route path="/projects" component={ProjectList} exact/>
     <Route path="/contact" component={ContactPage} exact/>
     <Route path="/page/:name" component={ProjectPages} exact/>
     </div>
     <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
