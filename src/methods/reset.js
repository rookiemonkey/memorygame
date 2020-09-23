import shuffle from '../helpers/shuffle';

const reset = obj => {
    const resetCards = obj.state.cards.map(card => {
        card.cardState = 0;
        return card
    })

    obj.setState({ cards: shuffle(resetCards), clickedBox: 0, alert: '', lives: 6 })
}

export default reset;