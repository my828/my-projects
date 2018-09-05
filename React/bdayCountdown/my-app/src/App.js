import React, { Component } from 'react';
import turtle from './img/turtle.png';
import List from './list';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    }
  }

  handleClick(e) {
    e.preventDefault();
    var name = this.state.name;
    var bday = this.state.bday;
    this.setState({
      info: this.state.info.concat({
        name: name,
        bday: bday
      })
    })
  }


  componentDidMount() {
    //localStorage.clear();
    const cached = localStorage.getItem("info");
    console.log(cached)
    console.log(JSON.parse(cached))
    if (cached) {
      this.setState({
        info: JSON.parse(cached)
      })
    }
  }
  componentDidUpdate() {
    localStorage.setItem("info", JSON.stringify(this.state.info))
    console.log("nothing" + localStorage.info)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={turtle} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Birthday Countdown!!</h1>
        </header>
        <form type="submit" >
          <input id="name" type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
          <input id="bday" type="text" placeholder="Birthday ex-YYYY-MM-DD" value={this.state.bday} onChange={e => this.setState({bday: e.target.value})}/>
          <button type="button" onClick={e => this.handleClick(e)}>Submit</button>
        </form>
        <div>
          <select id="filter">
            <option value="upcoming">Upcoming</option>
            <option value="age">Age</option>
            <option value="name">Name</option>
          </select>
          <ul>
            <List list={this.state.info}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
