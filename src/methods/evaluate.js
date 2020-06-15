import setCardState from '../helpers/cardstate'

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
            setTimeout(() => {
                setCardState(
                    obj, stateCopy,
                    cardsCopy, selectedBoxes,
                    2, 'Correct! Please choose another pair')
            }, 300)

        } else {

            // set both the selected box state back to 0
            setTimeout(() => {
                setCardState(
                    obj, stateCopy,
                    cardsCopy, selectedBoxes,
                    0, "Sorry it's a wrong pair, Choose another one")
            }, 300)

        }
    } else {

        obj.setState({ alert: 'Choose another box that you think is a pair...' })

    }
}

export default evaluate;