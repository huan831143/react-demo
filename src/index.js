import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,browserHistory } from 'react-router';
import App from './App';
import Login from './pages/Login';
import Post from './pages/Post';
import Search from './pages/Search';
import Mine from './pages/Mine';
import Jobs from  './components/Jobs';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Post} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine}/>
    </Route>
    <Route path="/login" component={Login}/>
      <Route path="/jobs" component={Jobs}/>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
