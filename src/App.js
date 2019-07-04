import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchPlayer from "./components/SearchPlayer";
import DisplayName from './components/DisplayName';




class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      PlayerData: [],
      createLineup: []
    }
      this.GetAllPlayerData = this.GetAllPlayerData.bind(this)
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
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/MLB_National_League_logo.svg/1200px-MLB_National_League_logo.svg.png" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png"/>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/American_League_logo.svg/1200px-American_League_logo.svg.png" />
        </header>

      <SearchPlayer />
      <DisplayName PlayerData={this.state.PlayerData} />
      </div>
    )
  }

  
}

export default App;
