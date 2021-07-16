import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home'
import Games from './components/pages/Games'
import Categories from './components/pages/Categories'
import SignUp from './components/pages/SignUp'
import GamesSingle from './components/pages/GamesSingle';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/games/:review_id' component={GamesSingle}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
