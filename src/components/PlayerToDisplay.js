import React, { Component } from 'react';

export default function PlayerToDisplay(props){
    return <div key={props.index}>#{props.player.number} {props.player.name} {props.player.position} Avg: {props.player.avg} Homeruns: {props.player.homeruns} RBIs: {props.player.RBIs}
             
            </div>
}