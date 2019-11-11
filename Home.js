import React, {Component} from 'react';
import Affiche from './Affichage';

class Home extends React.Component{
constructor(){
    super();
    this.state={
        text : "Initial text",
        films : []
    };
}



    clicked(text){

        this.setState({text : this.refs.textBox.value });
        fetch('https://api.tvmaze.com/search/shows?q='+ this.refs.textBox.value )
        .then((Response)=> {return Response.json()})
        .then((result) => {console.log(result[0].show.name)
        this.setState({films : result})
        console.log(this.state.films)
        })
    }
   render(){
    return (

        <div>

            {this.state.text}
          <h1>Welcome here ! </h1>
          <input ref="textBox" type ="text" />
          <button onClick={(e)=>{this.clicked("hello")}}> Go ></button>

          <Affiche Films={this.state.films[0]} />
        </div>
      );
    }
}
export {Home as default};