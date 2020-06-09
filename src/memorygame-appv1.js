import React, { Component } from 'react';

// onclick show the color
// when id match, stay
// when id !match, return to default color

class MemoryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NUM_CARDS: 10,
      BG_ONSET: Array(5).fill("black", 0, 5), // should be NUM_CARDS / 2
      MATCHED: 0,
      MAXCHOSED: 2,
      SHOWN: 0,
      HIDDEN: 0
    }

    this.clickedBox = this.clickedBox.bind(this)
  }

  clickedBox(e) {
    const clickedBox1 = e.target.attributes[0].nodeValue // refers to the clicked box ID & nameattr
    const bgCOPY = this.state.BG_ONSET.slice("")
    bgCOPY.splice(clickedBox1, 1, e.target.textContent)
    this.setState({BG_ONSET: bgCOPY})
    // what is wrong? i forgot that everytime we call setState() it will call render
    // and since render shuflles the card, every click will shuflle the cards
    // cards needs to be a state
  }

  render() {

    // destructuring
    const {allColors:ALLCOLORS} = this.props
    const {NUM_CARDS, BG_ONSET} = this.state

    // MAX PAIRS
    const maxPAIRS = NUM_CARDS / 2

    // generate pairs of cards
    const cardsArray = Array(maxPAIRS).fill("dummy")
    let cards = cardsArray.map((card, i) => {
      const color = ALLCOLORS[Math.floor(Math.random() * (ALLCOLORS.length + 1))]
      // const randomColor = { backgroundColor: color }
      return [
          <div 
            key={Math.floor(Math.random()*50)} 
            name={i}
            className="card"
            style={{backgroundColor: BG_ONSET[i]}}
            onClick={this.clickedBox}
          ><span style={{display: 'none'}}>{color}</span></div>,
          
          
          <div 
            key={Math.floor(Math.random()*100)} 
            name={i}
            className="card"
            style={{backgroundColor: BG_ONSET[i]}}
            onClick={this.clickedBox}
          ><span style={{display: 'none'}}>{color}</span></div>,
        ]
    })

    // array cars is an array of array, array.flat fixes the issue
    let cardsOutput = cards.flat()

    // shuffles the array
    for (let idx1 = cardsOutput.length - 1; idx1 > 0; idx1--) {

      // generate a random index between 0 and idx1 (inclusive)
      let idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      [cardsOutput[idx1], cardsOutput[idx2]] = [cardsOutput[idx2], cardsOutput[idx1]]
    }

    return (
      <section className="card-container">
        {cardsOutput}
      </section>
    );
  }

}





MemoryGame.defaultProps = {
  // 147 colors
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
}
export default MemoryGame;
