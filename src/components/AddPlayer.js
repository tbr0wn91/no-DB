import React, { Component } from 'react';
import axios from 'axios';
import "./AddPlayer.css";

export default class AddPlayer extends Component {
    constructor(props){
        super(props)

        this.state = {
            number: 0,
            name: "",
            position: "",
            avg: 0,
            homeruns: 0,
            RBIs: 0
        }
    }


    universalChangeHandler(property, value){
        this.setState({
            [property]: value
        });
    }

    createNewPlayer = () => {
        const newPlayer = {
          number: this.state.number,
          name: this.state.name,
          position: this.state.position,
          avg: this.state.avg,
          homeruns: this.state.homeruns,
          RBIs: this.state.RBIs
        };
        axios.post("/api/new_player", newPlayer).then(response => {
            console.log(response.data)
          this.props.setPlayerData(response.data)
        }).catch(err => console.log(err));
      }

    render(){
        console.log(this.state)

        const { number, name, position, avg, homeruns, RBIs} = this.state;
    
        return(
        <div className="formbox">
            <form className="playerform-container">
                <div className="player-input">
                Number:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type='number' value={number} name="number" />
                </div>
                <div className="player-input">
                P Name:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="text" value={name} name="name" placeholder="player name"/>
                </div>
                <div className="player-input">
                Position:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="text" value={position} name="position" placeholder="enter position"/>
                </div>
                <div className="player-input">
                Average:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="number" value={avg} name="avg"/>
                </div>
                <div className="player-input">
                Homeruns:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} type="number"value={homeruns} name="homeruns" />
                </div>
                <div className="player-input">
                RBIs:<input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)}type="number" value={RBIs} name="RBIs"/>
                </div>
                <div>
                <button className="player-button" onClick={this.createNewPlayer}>Create Player</button>
                </div>
            </form>
         </div>
        )
    }
}