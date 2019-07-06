import React from 'react';


export default function deletePlayer(props){
    const {id} = props
    return(
       <button onClick={({id}) => props.deletePlayer({id})}>Delete Player</button>
    )
}