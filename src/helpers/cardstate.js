import overwrite from '../helpers/overwrite'

const setCardState = (obj, state, cards, selected, stateNum, msg) => {

    // set both the selected box state to 2
    const updateSelectedBoxes = selected.map(card => {
        card.cardState = stateNum;
        return card
    })

    // helper: to overwrite the chosen boxes
    overwrite(cards, updateSelectedBoxes, 0)
    overwrite(cards, updateSelectedBoxes, 1)

    // reset the click counter to 0
    state.clickedBox = 0
    const clickedBox = state.clickedBox

    // update the state
    obj.setState({
        clickedBox: clickedBox,
        cards: cards,
        alert: msg
    })

}

export default setCardState;