import React, { Component } from 'react';

class Box extends Component {
    render() {
        const { card, clickedBox } = this.props
        if (card.cardState === 0) {
            return (
                <div
                    id={card.id}
                    name={card.backgroundColor}
                    className="card"
                    style={{ backgroundColor: "black" }}
                    onClick={clickedBox}
                ></div>
            )
        } else if (card.cardState === 1) {
            return (
                <div
                    id={card.id}
                    name={card.backgroundColor}
                    className="card chosen"
                    style={{ backgroundColor: card.backgroundColor }}
                ></div>
            )
        } else if (card.cardState === 2) {
            return (
                <div
                    id={card.id}
                    name={card.backgroundColor}
                    className="card correct"
                    style={{ backgroundColor: card.backgroundColor }}
                ></div>
            )
        }
    }
}

export default Box