import React, { Component } from 'react';
import Link from 'redux-first-router-link'

import { Button } from 'rmwc/Button';

import './LayoutCentered.css';
import logo from './logo.svg';

class LayoutCentered extends Component {
  render() {
    return (
      <div className="root">
        <header className="App-header">
          <Link to="/home">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">TPSW</h1>
        </header>
      </div>
    );
  }
}

export default LayoutCentered;
