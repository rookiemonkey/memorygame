import React, { Component } from 'react';

// clicked box should have a style
// matched box should have a style

// ===============================================
// GLOBAL VARIBLES
// ===============================================
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

const cards = [
  {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
  {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
  {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
  {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
  {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
  {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
  {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
  {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
  {id: 8, cardState: CardState.HIDING, backgroundColor: 'orange'},
  {id: 9, cardState: CardState.HIDING, backgroundColor: 'orange'},
  {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
  {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
  {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
  {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
  {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
  {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
];

const shuffle = (arr) => {
  let shuffled = arr.slice()
  for (let idx1 = shuffled.length - 1; idx1 > 0; idx1--) {

    // generate a random index between 0 and idx1 (inclusive)
    let idx2 = Math.floor(Math.random() * (idx1 + 1));

    // swap elements at idx1 and idx2
    [shuffled[idx1], shuffled[idx2]] = [shuffled[idx2], shuffled[idx1]]
  }
  return shuffled
}




// ===============================================
// CLASS
// ===============================================
class MemoryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: shuffle(cards),
      clickedBox: 0
    };

    this.clickedBox = this.clickedBox.bind(this)
  }





  // ===============================================
  // METHODS
  // ===============================================
  clickedBox(e) {
      const targetElement = e.target.id;
      const stateCopy = Object.assign({}, this.state);
      const cardsCopy = stateCopy.cards.slice();
  
      // loop in to the copy of cards array
      const output = cardsCopy.map(card => {
        if(card.id === +targetElement) {
          card.cardState = CardState.SHOWING
          return card
        } else {
          return card
        }
      })
  
      // increment click
      let incrementClickedBox = stateCopy.clickedBox + 1;
      this.setState({cards: output, clickedBox: incrementClickedBox}, 
        ()=>{
          // call back to evaluate the chosen boxes
          this.evaluateTwoBoxes()})
  } 


  evaluateTwoBoxes(){
    if (this.state.clickedBox === 2) {
      const stateCopy = Object.assign({}, this.state)
      const cardsCopy = stateCopy.cards.slice();
      const selectedBoxesId = [];
      
      // filters the 2 selected boxes and its ids using their current state
      const selectedBoxes = cardsCopy.filter((card, i) => {
        if (card.cardState === 1) {
          selectedBoxesId.push(card.id)
          return card
        }
      })

      // checks if selected boxes has the same backgroundColor, returns a boolean
      const outputBool = selectedBoxes.every(card => {
        return card.backgroundColor == selectedBoxes[0].backgroundColor
      })

      if(outputBool) {
        // set both the selected box state to 2
        const updateSelectedBoxes = selectedBoxes.map(card => {card.cardState = 2; return card})

        // loop to overweite the selected box 1
        for (let card of cardsCopy) {
          if (card.id ===updateSelectedBoxes[0].id) {
            cardsCopy.splice(cardsCopy.indexOf(card), 1, updateSelectedBoxes[0])
          }
        }
        
        // loop to overweite the selected box 2
        for (let card of cardsCopy) {
          if (card.id === updateSelectedBoxes[1].id) {
            cardsCopy.splice(cardsCopy.indexOf(card), 1, updateSelectedBoxes[1])
          }
        }
        
        // reset the click counter to 0
        stateCopy.clickedBox = 0
        const clickedBox = stateCopy.clickedBox
    
        // update the state
        this.setState({clickedBox:clickedBox, cards:cardsCopy}, () => {
          alert("Boxes are the same. Correct!")
        })

      } else {
        // set both the selected box state back to 0
        const updateSelectedBoxes = selectedBoxes.map(card => {card.cardState = 0; return card})

        // loop to overweite the selected box 1
        for (let card of cardsCopy) {
          if (card.id === updateSelectedBoxes[0].id) {
            cardsCopy.splice(cardsCopy.indexOf(card), 1, updateSelectedBoxes[0])
          }
        }

        // loop to overweite the selected box 2
        for (let card of cardsCopy) {
          if (card.id === updateSelectedBoxes[1].id) {
            cardsCopy.splice(cardsCopy.indexOf(card), 1, updateSelectedBoxes[1])
          }
        }

        // reset the click counter to 0
        stateCopy.clickedBox = 0
        const clickedBox = stateCopy.clickedBox
    
        // update the state
        this.setState({clickedBox:clickedBox, cards:cardsCopy}, () => {
          alert("WRONG BOX.. Please choose another one")
        })
      }
    }
  }









  // ===============================================
  // RENDER
  // ===============================================
  render() {
    const {cards:cardsArray, clickedBox:clicks} = this.state
    const card = cardsArray.map((card, i) => {

      // conditional render
      if (card.cardState === 0) {
        return (
          <div
            key={i}
            id={card.id}
            name={card.backgroundColor}
            className="card"
            style={{backgroundColor: "black"}}
            onClick={this.clickedBox}
            ></div>
        )
        } else if (card.cardState === 1) {
        return (
          <div
            key={i}
            id={card.id}
            name={card.backgroundColor}
            className="card chosen"
            style={{backgroundColor: card.backgroundColor}}
            ></div>
        ) 
      }  else if (card.cardState === 2) {
        return (
          <div
            key={i}
            id={card.id}
            name={card.backgroundColor}
            className="card correct"
            style={{backgroundColor: card.backgroundColor}}
            ></div>
        ) 
      }


    })

    return (
      <div className="card-container">
        {card}
      </div>
    )

  }
}












export default MemoryGame;

// const allColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
//               "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
//               "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
//               "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
//               "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
//               "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
//               "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
//               "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
//               "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
//               "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
//               "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
//               "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
//               "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
//               "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
//               "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
//               "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
//               "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
//               "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
//               "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
//               "Yellow","YellowGreen"];