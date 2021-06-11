const express = require('express')
const router = express.Router()

const { insertTable, getTable, getTables, updateTable, getNewRound, addUserToTable } = require('./table.controller')


router.get('/', getTables)
router.post('/', insertTable)
router.get('/:id', getTable)
router.put('/:id/newround', getNewRound)
router.put('/:id', updateTable)
router.get('/:id/join/:userId', addUserToTable)
// router.get('/:id/new-round', getNewRound)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router