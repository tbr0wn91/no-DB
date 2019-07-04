import React, { Component } from 'react';
import axios from 'axios';
import './App.css';





class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      lineup: [],
      avg: "",

    }
      
  }

  componentDidMount(){
    this.GetAllPlayerData();
  }

  GetAllPlayerData(){
    axios.get("/api/players").then(response => {
      this.setState({
        PlayerData: response.data
      })
    }).catch(err => console.log(err));
    
  }
    

  render(){
    return (
      <div className="App">
        Hello World
        
      </div>
    )
  }

  
}

export default App;
