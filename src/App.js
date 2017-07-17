import React, { Component } from 'react';
import {Link,IndexLink}  from 'react-router';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
           <ul role="nav" className="App-foot">
            <li><IndexLink to="/" activeClassName="active">职位</IndexLink></li>
            <li><Link to="/search" activeClassName="active">搜索</Link></li>
               <li><Link to="/mine" activeClassName="active">我的</Link></li>
          </ul>
      </div>
    );
  }
}

export default App;
