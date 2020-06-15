import React, { Component } from 'react';
import click from './methods/click';
import evaluate from './methods/evaluate';
import shuffle from './methods/shuffle';
import Box from './components/box';

// ===============================================
// GLOBAL VARIBLES
// ===============================================
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

const cards = [
  { id: 0, cardState: CardState.HIDING, backgroundColor: 'red' },
  { id: 1, cardState: CardState.HIDING, backgroundColor: 'red' },
  { id: 2, cardState: CardState.HIDING, backgroundColor: 'navy' },
  { id: 3, cardState: CardState.HIDING, backgroundColor: 'navy' },
  { id: 4, cardState: CardState.HIDING, backgroundColor: 'green' },
  { id: 5, cardState: CardState.HIDING, backgroundColor: 'green' },
  { id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow' },
  { id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow' },
  { id: 8, cardState: CardState.HIDING, backgroundColor: 'orange' },
  { id: 9, cardState: CardState.HIDING, backgroundColor: 'orange' },
  { id: 10, cardState: CardState.HIDING, backgroundColor: 'purple' },
  { id: 11, cardState: CardState.HIDING, backgroundColor: 'purple' },
  { id: 12, cardState: CardState.HIDING, backgroundColor: 'pink' },
  { id: 13, cardState: CardState.HIDING, backgroundColor: 'pink' },
  { id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue' },
  { id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue' }
];

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