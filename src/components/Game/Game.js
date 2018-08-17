import React from "react";

class Game extends React.Component {

    state = {
        country: '',
        countryArray: [],
        countryLength: 0,
        updatedGuess: [],
        guess: '',
        displayGuess: '',
        guessed: [],
        guessesLeft: 10
    };

    componentDidMount() {
        this.setCountry();
    }

    componentDidUpdate() {
        console.log('component updated');
        
        // this.checkLetter(); 
        console.log(this.state);
    }

    // sets the word to guess information
    setCountry = () => {
        var countries = ['germany', 'france', 'austria', 'belgium', 'england'];
        var setCountry = countries[Math.floor(Math.random() * countries.length)];
        var countryArray = setCountry.split('');
        var countryLength = countryArray.length;
        var updatedGuess = [];
        for (var i=0; i<countryLength; i++) {
            updatedGuess.push('_');
        }
        this.setState({
            country: setCountry,
            countryArray: countryArray,
            countryLength: countryLength,
            updatedGuess: updatedGuess
        });
    }

    checkLetter = ()=> {
        var newUpdatedGuess = this.state.updatedGuess;
        console.log(this.state.updatedGuess);
        console.log(this.state.countryArray);
        if(this.state.updatedGuess === this.state.countryArray) {
            console.log('you won');
        }
        for (var i=0; i<this.state.countryLength; i++) {
            if(this.state.guess === this.state.countryArray[i]) {
                console.log('letter exists');
                newUpdatedGuess[i] = this.state.guess;
                this.setState({
                   updatedGuess: newUpdatedGuess 
                })
            }
        }
        
        
        
    }

    handleInputChange = (event) => {

        var { name, value } = event.target;

        this.setState({
            guess: value,
            displayGuess: ''
        });
        this.checkLetter();
    }

    render() {
      return (
        <div>
            <h2>My name is {this.state.name}</h2>
            {/* <button onClick={this.changeName}>Change Name</button> */}
            <h3></h3>
            <input
                value= {this.state.displayGuess}
                name="guess"
                onChange={this.handleInputChange}
                type="text"
                placeholder={this.state.updatedGuess}
            />
        </div>
      );
    }
  }
  
  export default Game;
  