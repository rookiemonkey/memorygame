import React, { Component } from 'react';
import click from './methods/click';
import evaluate from './methods/evaluate';
import shuffle from './helpers/shuffle';
import cards from './helpers/cards';
import Box from './components/box';

// ===============================================
// MAIN COMPONENT
// ===============================================
class MemoryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: shuffle(cards),
      clickedBox: 0,
      alert: ''
    };
  }


  // ===============================================
  // METHODS
  // ===============================================
  clickedBox = e => {
    click(this, e);
  }

  evaluateTwoBoxes = () => {
    evaluate(this);
  }


  // ===============================================
  // RENDER
  // ===============================================
  render() {
    const { cards: cardsArray, alert } = this.state
    const card = cardsArray.map((card, i) => {
      return <Box
        key={i}
        card={card}
        clickedBox={this.clickedBox}
      ></Box>
    })

    return (
      <div>
        <h1>Memory Game</h1>
        <div className="card-container">
          {card}
        </div>
        <h4>{alert}</h4>
      </div>
    )

  }
}


export default MemoryGame;