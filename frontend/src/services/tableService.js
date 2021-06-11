'use strict';

import { httpService } from './httpService.js';
// import utilsService from './utilsService.js'
// import playerService from '@/services/playerService.js'

// const card = {id: num: 5 , suit: s}

export default {
    query,
    add,
    update,
    getById,
    newRound,
    joinTable,
    // join
    //     remove,
    //     save
}


async function query() {
    return await httpService.get(`table/`)
}

function add(table) {
    // console.log('tableService: (ADD)', table)
    // const tableSpread = { ...table }
    // console.log('tableService: (tt)', table)
    return httpService.post(`table/`, table)
}

function getById(tableId) {
    return httpService.get(`table/${tableId}`)
}

function newRound(tableId) {
    return httpService.put(`table/${tableId}/newround`)
}

function update(table) {
    return httpService.put(`table/${table._id}`, table)
}

function joinTable(tableId, userId) {
    return httpService.get(`table/${tableId}/join/${userId}`)
}

// function join(tableId) {
//     return httpService.put(`table/${table._id}`, ta)
// }

/////////////////////////////

// function save(table) {
//     if (table._id) return httpService.put(KEY, table);
//     else return httpService.post(KEY, table)
// }

// function remove(id) {
//     return httpService.delete(KEY, id);
// }
