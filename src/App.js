import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name: ''
    };
  }

  klik() {
    this.setState({ name: this.refs.nama.value });
  }

  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#login">Login</a></li>
          <li><a data-toggle="tab" href="#welcome">Welcome</a></li>
        </ul>

        <div className="tab-content isiTab">

          <div id="login" className="tab-pane fade in active">
            <h5><strong>Name</strong></h5>
            <input className="form-control" ref="nama" type="text" />
            <br />
            <button className="btn btn-primary" onClick={() => { this.klik(); }}>Submit</button>
          </div>

          <div id="welcome" className="tab-pane fade">
            <h1>{this.state.name}</h1>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

