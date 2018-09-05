import React from 'react';
import turtle from './img/turtle.png'
import './App.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            list: []
        }
    }
    handleSubmit(e) {
      e.preventDefault();
      var input = this.state.input;
      this.setState({
        input: "",
        list: this.state.list.concat(input)
      })
    }

    handleDone(e) {
      e.target.classList.toggle('checked');
    }

    handelClose(e) {
      e.target.parentElement.style.display = "none";
    }

    handleClear() {
      var checked = document.getElementsByClassName("checked");
      for (var i = 0; i < checked.length; i++) {
        checked[i].style.display = "none";
      }
    }
    render() {
        var header = {
            backgroundColor: 'Tomato',
            padding: '10px'
        }
        var turtleStyle = {
            width: '100px',
            borderRadius: '50%',
            borderStyle: 'dotted'
        }
        var title = {
            marginTop: '0'
        }
        var input = {
            width: '25%',
            padding: '10px',
            fontSize: '16px',
            position: 'relative',
            left: '90px'
        }
        var list = {
          cursor: "pointer",
          position: "relative",
          padding: "12px 8px 10px 40px",
          background: "#eee",
          fontSize: "18px",
          transition: "0.2s"

        }
        var date = new Date();
        date = date.toLocaleDateString();
        return (
          <div className="App">
            <header style={header}>               
                <h2 style={title}>
                    Hello<img src={turtle} alt="Turtle" style={turtleStyle}/>
                    Turtle!
                </h2>    
                <p>Today: <strong>{date}</strong></p>     
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" className="form-control" style={input} placeholder="What's next..." value={this.state.input} onInput={e => this.setState({input: e.target.value})}/>
                    <button className="w3-btn w3-red" type="button" style={{float: "right"}} onClick={e => this.handleClear()}>Clear Checked Tasks</button>
                </form>
            </header>
            <ul>  
              {
                this.state.list.map(
                  (currentElement, step) => 
                  <li onClick={e => this.handleDone(e)} key={step} style={list}>{currentElement}                  <span className="close" onClick={e => this.handelClose(e)}>&#215;</span></li>
                )
              }
            </ul>
          </div>
        )
    }
}