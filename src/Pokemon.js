import React from 'react';

export default class Pokemon extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemoneData: {}
        }
    }
    render(){
        if (this.state.pokemoneData.name){
            return(
                <div>
                    <h1>Pokemon data found!</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>Still loading pokemon data</h1>
                </div>
            )

        }
    }
}
