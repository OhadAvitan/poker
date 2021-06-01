const userService = require('./user.service')
const logger = require('../../services/logger.service')

async function getHand(req, res) {
    try {
        // console.log('req.body:', req.body);
        const user = await userService.insert(req.body)
        res.send(user)
    } catch (err) {
        logger.error('Failed to INSERT user', err)
        res.status(500).send({ err: 'Failed to INSERT user' })
    }
}


// async function getUser(req, res) {
//     try {
//         const user = await userService.getById(req.params.id)
//         res.send(user)
//     } catch (err) {
//         logger.error('Failed to get user', err)
//         res.status(500).send({ err: 'Failed to get user' })
//     }
// }

module.exports = {
    getHand,
    // getUsers,
    // deleteUser,
    // updateUser
}