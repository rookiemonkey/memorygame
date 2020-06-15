function evaluate(obj) {
    if (obj.state.clickedBox === 2) {
        const stateCopy = Object.assign({}, obj.state)
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

        if (outputBool) {
            // set both the selected box state to 2
            const updateSelectedBoxes = selectedBoxes.map(card => { card.cardState = 2; return card })

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
            obj.setState({
                clickedBox: clickedBox,
                cards: cardsCopy,
                alert: 'Correct! Please choose another pair'
            })

        } else {
            // set both the selected box state back to 0
            const updateSelectedBoxes = selectedBoxes.map(card => { card.cardState = 0; return card })

            // loop to overwrite the selected box 1
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
            obj.setState({
                clickedBox: clickedBox,
                cards: cardsCopy,
                alert: 'Wrong Boxes.. Please choose another pair'
            })
        }
    }
}

export default evaluate;