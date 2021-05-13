'use strict';

const utilsService = require('./utils.service.js')



function newPlayer() {
    return {
        id: 'p' + utilsService.getRandomId(),
        name: '',
        hand: []
    }
}

module.exports = {
    newPlayer
}
// function newPlayer(name) {
//     return {
//         id: utilsService.getRandomId(),
//         name: name,
//         hand: []
//     }
// }