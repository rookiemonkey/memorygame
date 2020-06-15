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

export default shuffle;