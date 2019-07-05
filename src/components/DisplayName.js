import React, { Component } from 'react';
import UserInput from './UserInput';
import PlayerToDisplay from "./PlayerToDisplay";
export default class DisplayName extends Component{
    constructor(props){
        super(props)

        this.state ={
            UserInput: "",
            
        }
    }
  

    handleUserInput(UserInput, id, avg){
        console.log("this is the user input", UserInput)
        this.setState({

            UserInput: UserInput,
            id: this.id,
            avg: this.avg
        })
    }

    
        render(){
            const mappedPlayers = this.props.PlayerData.map(player => {
                // console.log(player)
                 return <div>
                         <PlayerToDisplay player={player}/>
                         <input onChange={(e) => this.handleUserInput(e.target.value)} type="text"></input>
                         <button onClick={() =>this.props.updatePlayerStats(player.id, this.state.UserInput)}>Update Avg</button>
         
                 </div>
             });

            return(
                <div>{mappedPlayers}
                 
              </div>
            )
    

        }
        

    
    
    

}

