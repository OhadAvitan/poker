'use strict';

import utilsService from './utilsService.js'

export default {
    newPlayer
}

function newPlayer() {
    return {
        id: 'p' + utilsService.getRandomId(),
        name: null,
        hand: []
    }
}

// function newPlayer(name) {
//     return {
//         id: utilsService.getRandomId(),
//         name: name,
//         hand: []
//     }
// }