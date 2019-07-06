import React, { Component } from 'react';

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





    render(){

        const { number, name, position, avg, homeruns, RBIs} = this.state;
    
        return(
         <div></div>
        )
    }
}