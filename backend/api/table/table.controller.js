const tableService = require('./table.service')
const logger = require('../../services/logger.service')

async function insertTable(req, res) {
    try {
        const table = await tableService.insert(req.params)
        res.send(table)
        console.log('table BackEnd:', table);
    } catch (err) {
        logger.error('Failed to ...', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

async function getTable(req, res) {
    try {
        const table = await tableService.getById(req.params.id)
        res.send(table)
    } catch (err) {
        logger.error('Failed to get table', err)
        res.status(500).send({ err: 'Failed to get table' })
    }
}

module.exports = {
    insertTable,
    getTable

}