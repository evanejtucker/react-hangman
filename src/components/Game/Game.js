import React from "react";

class Game extends React.Component {

    state = {
        name: this.props.title,
    };

    changeName =(e)=> {
        // e.preventDefault();
        console.log(this.state.name);
        this.setState({name: 'jerry'}, ()=>{
            console.log(this.state.name);
        });
        // console.log(this.state.name);
        // this.setState({ name: 'jerry'} );
    }

    render() {
      return (
        <div>
            <h2>My name is {this.state.name}</h2>
            <button onClick={this.changeName}>Change Name</button>
        </div>
      );
    }
  }
  
  export default Game;
  