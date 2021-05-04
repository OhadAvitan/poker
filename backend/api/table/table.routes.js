const express = require('express')
const router = express.Router()

const { insertTable, getTable } = require('./table.controller')


// router.get('/', getUsers)
router.get('/:id', getTable)
router.put('/', insertTable)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router