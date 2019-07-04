import React, { Component } from 'react';

export default function DisplayName(props){
   const mappedPlayers = props.PlayerData.map(player => {
        return <div key={props.index}>{player.name} {player.position}</div>
    });


    return(
        <div>{mappedPlayers}</div>
    )
    

};

