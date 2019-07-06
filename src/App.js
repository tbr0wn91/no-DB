import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchPlayer from "./components/SearchPlayer";
import DisplayName from './components/DisplayName';
import UserInput from "./components/UserInput"
import AddPlayer from "./components/AddPlayer"


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      PlayerData: [],
      createLineup: []
    }
      this.GetAllPlayerData = this.GetAllPlayerData.bind(this);
      this.updatePlayerStats = this.updatePlayerStats.bind(this);
      this.addPlayerToLineup = this.addPlayerToLineup.bind(this);
      this.createALineup = this.createALineup.bind(this);
      this.createNewPlayer = this.createNewPlayer.bind(this);
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

  createALineup(){
    axios.get("/api/lineup").then(response => {
      this.setState({
        lineup: response.data
      })
    }).catch(err => console.log(err));
  }

  createNewPlayer(){
    axios.post("/api/new_player").then(response => {
      this.setState({
        PlayerData: response.data
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
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MLB_National_League_logo.svg/1200px-MLB_National_League_logo.svg.png" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png"/>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_League_logo.svg/1200px-American_League_logo.svg.png" />
        </header>
      <main className="content">
      <SearchPlayer PlayerData={PlayerData}/>
      <DisplayName updatePlayerStats={this.updatePlayerStats} PlayerData={PlayerData} />
      <AddPlayer createNewPlayer={this.createNewPlayer} />
      </main>
      </div>
    )
  }

  
}

export default App;
