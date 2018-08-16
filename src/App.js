import React, { Component } from 'react';
import Game from "./components/Game";
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  render() {
    return(
      <Container>
        <Row>
          <h1>Hangman Game</h1>
          <Game/>
        </Row>
      </Container>
    );
  }
}

export default App;
