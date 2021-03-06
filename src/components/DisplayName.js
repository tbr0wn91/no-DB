import React, { Component } from 'react';
import "./DisplayName.css"
import PlayerToDisplay from "./PlayerToDisplay";
import DeletePlayer from "./DeletePlayer"

export default class DisplayName extends Component{
    constructor(props){
        super(props)

        this.state ={
            UserInput: "",
            
        }
    }
  

    handleUserInput(UserInput,){
        console.log("this is the user input", UserInput)
        this.setState({

            UserInput: UserInput,
            
        })
    }

    
        render(){
            const mappedPlayers = this.props.PlayerData.map((player, index) => {
                // console.log(player)
                 return <div key={index} className="player-list">
                       <div className="display-box"> 
                         <PlayerToDisplay player={player}/>
                         <input onChange={(e) => this.handleUserInput(e.target.value)} type="text"></input>
                         <button onClick={() =>this.props.updatePlayerStats(player.id, this.state.UserInput)}>Update Avg</button>
                         <DeletePlayer deletePlayer={this.props.deletePlayer} id={index} />
                       </div>
                 </div>
             });

            return(
                <div>{mappedPlayers}
                 
              </div>
            )
    

        }
        

    
    
    

}

