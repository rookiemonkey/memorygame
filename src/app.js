import React, { Component } from 'react';
import click from './methods/click';
import evaluate from './methods/evaluate';
import reset from './methods/reset';
import shuffle from './helpers/shuffle';
import cards from './helpers/cards';
import Box from './components/box';
import Brain from './components/brain-icon';
import Heart from './components/heart-icon';

// ===============================================
// MAIN COMPONENT
// ===============================================
class MemoryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: shuffle(cards),
      clickedBox: 0,
      alert: '',
      lives: 6
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

  resetGame = () => {
    reset(this);
  }

  // ===============================================
  // RENDER
  // ===============================================
  render() {
    const { cards: cardsArray, lives, alert } = this.state

    const card = cardsArray.map((card, i) => {
      return <Box
        key={i}
        card={card}
        clickedBox={this.clickedBox}
      ></Box>
    })

    const hearts = new Array(lives).fill().map((obj, ind) => {
      return <Heart key={ind} />
    })

    if (lives !== 0) {
      return (
        <div className="game-container">

          <div className="game-heading-container">
            <h1 className="game-heading"><Brain /> Memory Game</h1>
            <h4>Lives: {hearts}</h4>
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
    } else {
      return (
        <div className="game-container">
          <div className="game-heading-container">
            <h1 className="game-heading">Game Over</h1>
            <button onClick={this.resetGame}>Play Again</button>
          </div >
        </div >
      )
    }
  }
}


export default MemoryGame;