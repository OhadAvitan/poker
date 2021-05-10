const tableService = require('./table.service')
const logger = require('../../services/logger.service')

async function insertTable(req, res) {
    console.log('table.controller rep.body:',req.body);
    try {
        console.log('table.controller',req.body)
        const table = await tableService.insert(req.body)
        console.log('table.controller after serviceeeeeee:',table)
        // console.log('table.controller after serviceeeeeee333333:',res.send(table))
        res.send(table)
        // res.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        // console.log('table after INSERTED:', table);
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
        const table = await tableService.getById(req.params.id)
        res.send(table)
    } catch (err) {
        logger.error('Failed to get table', err)
        res.status(500).send({ err: 'Failed to get table' })
    }
}

module.exports = {
    insertTable,
    getTable,
    getTables

}