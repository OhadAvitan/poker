const express = require('express')
const router = express.Router()
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getHand, } = require('./hand.controller')

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/:id', getHand)
router.post('/', insertUser)
// router.get('/', getUsers)
// router.get('/:id', getUser)
// router.put('/:id', updateUser)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id', requireAuth, requireAdmin, deleteUser)

module.exports = router