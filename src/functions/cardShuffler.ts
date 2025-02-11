
const cardShuffler = (deck: Array<number>, algorithm: Function, userNumber: number) => {
    let startingTime = performance.now()

    for (let repeat = 0; repeat < userNumber; repeat++) { // Repeat shuffling multiple times
        for (let i = deck.length - 1; i > 0; i--) { // Shuffle using Fisher-Yates
            let j = Math.floor(algorithm()); // Pick a random index
            [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
        }
    }

    let endingTime = performance.now()
    let totalTime = endingTime - startingTime

    return { startingTime, endingTime, totalTime }
}

export default cardShuffler
