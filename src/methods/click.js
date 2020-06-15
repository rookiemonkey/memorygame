function click(obj, e) {

    // prevents the user from spamming becuase of the delay in evaluation
    if (obj.state.clickedBox != 2) {

        const targetElement = e.target.id;
        const stateCopy = Object.assign({}, obj.state);
        const cardsCopy = stateCopy.cards.slice();

        // loop in to the copy of cards array
        const output = cardsCopy.map(card => {
            if (card.id === +targetElement) {
                card.cardState = 1
                return card
            } else {
                return card
            }
        })

        // increment click
        let incrementClickedBox = stateCopy.clickedBox + 1;

        // finally set the state
        obj.setState({ cards: output, clickedBox: incrementClickedBox },
            () => {

                // call back to evaluate the chosen boxes
                obj.evaluateTwoBoxes()
            })

    }
}

export default click

