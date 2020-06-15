const overwrite = (arr, arr2, i) => {
    for (let card of arr) {
        if (card.id === arr2[i].id) {
            arr.splice(arr.indexOf(card), 1, arr2[i])
        }
    }
}

export default overwrite;

