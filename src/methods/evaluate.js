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
            setCardState(
                obj, stateCopy,
                cardsCopy, selectedBoxes,
                2, 'Correct! Please choose another pair')

        } else {

            // set both the selected box state back to 0
            setCardState(
                obj, stateCopy,
                cardsCopy, selectedBoxes,
                0, 'Sorry its a wrong pair, Choose another one')

        }
    } else {

        obj.setState({ alert: 'Choose another box that your think is a pair...' })
        
    }
}

export default evaluate;