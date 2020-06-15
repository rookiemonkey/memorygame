import React, { Component } from 'react';
import click from './methods/click';
import evaluate from './methods/evaluate';
import shuffle from './helpers/shuffle';
import cards from './helpers/cards';
import Box from './components/box';
import Icon from './components/icon';

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
      <div className="game-container">

        <div className="game-heading-container">
          <h1 className="game-heading"><Icon ></Icon> Memory Game</h1>
        </div>

        <div className="cards-container-outer">
          <div className="cards-container-inner">
            {card}
          </div>
        </div>

        <div className="game-alerts-container">
          <h4 className="game-alerts">{alert}</h4>
        </div>

      </div>
    )

  }
}


export default MemoryGame;