import React from 'react';


export default function deletePlayer(props){
    console.log("delete id", props.id)
    return(
        
       <button onClick={() => props.deletePlayer(props.id)}>Delete Player</button>
    )
}