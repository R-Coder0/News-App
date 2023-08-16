import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

export default class App extends Component {
  pageSize=15;
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
        <NavBar/>

        <Routes>
        <Route exact path="/" element={<News key="General" pageSize={this.pageSize} apikey={this.apikey} country="in" category="General"/>}></Route>
        <Route exact path='/Business' element={<News key="Business" pageSize={this.pageSize} apikey={this.apikey} country="in" category="Business"/>}></Route>
        <Route exact path='/Entertainment' element={<News key="Entertainment"pageSize={this.pageSize} apikey={this.apikey} country="in" category="Entertainment"/>}></Route>
        <Route exact path='/General' element={<News key="General" pageSize={this.pageSize} apikey={this.apikey} country="in" category="General"/>}></Route>
        <Route exact path='/Health' element={<News key="Health" pageSize={this.pageSize} apikey={this.apikey} country="in" category="Health"/>}></Route>
        <Route exact path='/Science' element={<News key="Science" pageSize={this.pageSize} apikey={this.apikey} country="in" category="Science"/>}></Route>
        <Route exact path='/Sports' element={<News key="Sports" pageSize={this.pageSize} apikey={this.apikey} country="in" category="Sports"/>}></Route>
        <Route exact path='/Technology' element={<News key="Technology" pageSize={this.pageSize} apikey={this.apikey} country="in" category="Technology"/>}></Route>
      </Routes>
      <Footer/>
        </Router>
      </div>
    )
  }   
}

