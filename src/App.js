import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import DisplayName from './components/DisplayName';
import AddPlayer from "./components/AddPlayer"
import Header from "./components/header"


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      PlayerData: []
      
    }
      this.GetAllPlayerData = this.GetAllPlayerData.bind(this);
      this.updatePlayerStats = this.updatePlayerStats.bind(this);
      
      
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

  setPlayerData = (payload) => {
    this.setState({
      PlayerData: payload
    })
  }


  updatePlayerStats(id, value){
    console.log(id)
    console.log(value)
    axios.put(`/api/player_stats/${id}?avg=${value}`).then(response => {
      this.setState({
        PlayerData: response.data
      })
    }).catch(err => console.log(err));
  }

 
  
  deletePlayer = (id) => {
    console.log("this is the id", id)
    axios.delete(`/api/delete/${id}`).then(response => {
      console.log("delete response:",response.data)
      this.setState({
        PlayerData: response.data
      })
    })
  }

  render(){
    const { PlayerData } = this.state;
    return (
      <div className="App">
        <Header />
        
      <main className="content">
      <DisplayName updatePlayerStats={this.updatePlayerStats} PlayerData={PlayerData} deletePlayer={this.deletePlayer} />
      <AddPlayer setPlayerData={this.setPlayerData} />
      </main>
      </div>
    )
  }

  
}

export default App;
