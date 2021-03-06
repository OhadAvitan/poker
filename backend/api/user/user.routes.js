const express = require('express')
const router = express.Router()
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { insertUser, getUser, addUserToTable, getUsers, updateUser } = require('./user.controller')

// middleware that is specific to this router
// router.use(requireAuth)

// router.get('/:id/join/:tableId', addUserToTable)
router.post('/', insertUser)
router.get('/:id', getUser)
// router.get('/', getUsers)
// router.put('/:id', updateUser)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id', requireAuth, requireAdmin, deleteUser)

module.exports = router