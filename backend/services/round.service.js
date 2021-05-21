'use strict'

function getNewDeck() {
    var deck = createDeck();
    return shuffleDeck(deck);
}

module.exports = {
    getNewDeck
}