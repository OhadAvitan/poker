const tableService = require('./table.service')
const logger = require('../../services/logger.service')

async function insertTable(req, res) {
    try {
        const table = await tableService.insert(req.body)
        console.log('TABLE INSERTED');
        res.send(table)
    } catch (err) {
        logger.error('Failed to ...', err)
        res.status(500).send({ err: 'Failed to INSERT table.' })
    }
}

async function getTables(req, res) {
    try {
        const tables = await tableService.query()
        res.send(tables)
    } catch (err) {
        logger.error('Failed to load tables.', err)
        res.status(500).send({ err: 'Failed to load tables.' })
    }
}

async function getTable(req, res) {
    try {
        // console.log('req.params(table.controller):', req.params)
        const table = await tableService.getById(req.params.id)
        res.send(table)
    } catch (err) {
        logger.error('Failed to get table', err)
        res.status(500).send({ err: 'Failed to get table' })
    }
}

async function updateTable(req, res) {
    try {
        console.log('req.params', req.params);
        console.log('req.body', req.body);
        console.log('IM 11111111111111111111');
        const tempTable = req.body
        console.log('tempTable', tempTable);
        const table = await tableService.update(tempTable)
        res.send(table)
    } catch (err) {
        logger.error('Failed to UPDATE table', err)
        res.status(500).send({ err: 'Failed to UPDATE table' })
    }
}

async function getNewRound(req, res) {
    try {
        // console.log('req.params', req.params);
        const tableId = req.params.id
        // console.log('req.params', tableId);
        // console.log('req.body', req.body);
        console.log('getNewRound:(table.controller):');
        const newRoundTable = await tableService.newRound(tableId)
        console.log('newRoundTable:::::::::::::::::::', newRoundTable);
        // const table = await tableService.update(tempTable)
        res.send(newRoundTable)
    } catch (err) {
        logger.error('Failed to UPDATE table', err)
        res.status(500).send({ err: 'Failed to UPDATE table' })
    }
}

module.exports = {
    insertTable,
    getTable,
    getTables,
    updateTable,
    getNewRound

}