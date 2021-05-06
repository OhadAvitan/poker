const express = require('express')
const router = express.Router()

const { insertTable, getTable, updateTable } = require('./table.controller')


// router.get('/', getUsers)
router.post('/', insertTable)
// router.put('/:id', updateTable)
router.get('/:id', getTable)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router