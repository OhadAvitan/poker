'use strict';

import { httpService } from './httpService.js';
// import utilsService from './utilsService.js'
// import playerService from '@/services/playerService.js'

// const card = {id: num: 5 , suit: s}

const KEY = 'tables';

export default {
    query,
    add,
    getById,
    remove,
    save
}


async function query() {
    return await httpService.get(`table/`)
}

function add(table) {
    console.log('tableService: (ADD)', table)
    const tt = { ...table }
    // console.log('tableService: (tt)', table)
    return httpService.post(`table/`, tt)
}

function getById(tableId) {
    return httpService.get(`table/${tableId}`)
}

/////////////////////////////

function save(table) {
    if (table._id) return httpService.put(KEY, table);
    else return httpService.post(KEY, table)
}

function remove(id) {
    return httpService.delete(KEY, id);
}
