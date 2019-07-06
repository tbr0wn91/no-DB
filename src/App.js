import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchPlayer from "./components/SearchPlayer";
import DisplayName from './components/DisplayName';
import UserInput from "./components/UserInput"
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
      this.addPlayerToLineup = this.addPlayerToLineup.bind(this);
      this.createALineup = this.createALineup.bind(this);
     
      this.deletePlayer = this.deletePlayer.bind(this)
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

  createALineup(){
    axios.get("/api/lineup").then(response => {
      this.setState({
        lineup: response.data
      })
    }).catch(err => console.log(err));
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

  addPlayerToLineup(){
    axios.put("/api/add_player/:id").then(response => {
      this.setState({
        lineup: response.data
      })
    }).catch(err => console.log(err));
  }
  
  deletePlayer(){
    axios.delete("/api/remove_player/:id").then(response => {
      this.setState({
        lineup: response.data
      })
    })
  }

  render(){
    const { PlayerData } = this.state;
    return (
      <div className="App">
        <Header />
        
      <main className="content">
      <SearchPlayer PlayerData={PlayerData}/>
      <DisplayName updatePlayerStats={this.updatePlayerStats} PlayerData={PlayerData} />
      <AddPlayer setPlayerData={this.setPlayerData} />
      </main>
      </div>
    )
  }

  
}

export default App;
