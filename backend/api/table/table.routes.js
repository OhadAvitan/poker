const express = require('express')
const router = express.Router()

const { insertTable, getTable, getTables, updateTable } = require('./table.controller')


router.get('/', getTables)
router.get('/:id', getTable)
router.post('/', insertTable)
// router.put('/:id', updateTable)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router