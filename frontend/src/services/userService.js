'use strict';

import { httpService } from './httpService.js';
// import utilsService from './utilsService.js'
// import playerService from '@/services/playerService.js'

// const card = {id: num: 5 , suit: s}


export default {
    query,
    add,
    getById,
    // update,
    // remove,
    // save
}


async function query() {
    return await httpService.get(`user/`)
}

function add(userCred) {
    console.log('userService: (ADD)', userCred)
    return httpService.post(`user/`, userCred)
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}
