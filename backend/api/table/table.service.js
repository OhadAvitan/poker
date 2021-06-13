const ObjectId = require('mongodb').ObjectId

// const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const dbService = require('../../services/db.service.js')
const deckService = require('../../services/deck.service.js')

module.exports = {
    query,
    insert,
    update,
    getById,
    newRound,
    addUserToTable
    // setNewTable
}

async function query() {
    try {
        console.log('QUERY:(table.service):');

        const collection = await dbService.getCollection('tables')
        // console.log('collection:', collection);
        var tablesQuery = await collection.find({}).toArray()
        // console.log('tablesQuery:', tablesQuery);
        return tablesQuery
    } catch (err) {
        logger.error('cannot QUERY table. (from table.service)', err)
        throw err
    }
}

async function insert(table) {
    try {
        console.log('table.service table before:', table);
        // if (userService.isUserExist(table.owner.phoneNumber)) { return false }
        const tableForDB = await setNewTable(table)
        console.log('1-------------------');
        const collection = await dbService.getCollection('tables')
        console.log('2-------------------');
        await collection.insertOne(tableForDB)
        console.log('3-------------------');

        // const collection1 = await dbService.getCollection('users')
        // await collection1.insertOne(tableForDB)

        // const what = await collection1.find({ phoneNumber: "0555555555" })
        // console.log('whaaaaaaaaaaaaaaaaaaaaaaaat', what.query);
        // const collectionTR = await dbService.getCollection('tables-rounds')
        // var tableRounds = { _id: tableForDB._id }
        // tableRounds.rounds = []
        // console.log(tableRounds);
        // await collectionTR.insertOne(tableRounds)

        // console.log('table.service table after:', tableForDB)
        return tableForDB
    } catch (err) {
        logger.error('cannot INSERT table. (from table.service)', err)
        throw err
    }
}

async function update(tempTable) {
    try {
        const table = { ...tempTable }
        // const table = JSON.parse(JSON.stringify(tempTable))
        // console.log('tabletryyyyyyyyyyyyy', tabletry);
        // console.log('tableeeeeeeeeeeeeeee', table);
        // console.log('UPDATE. 11111111111111111111');
        const collection = await dbService.getCollection('tables')
        await collection.updateOne({ '_id': ObjectId(table._id) }, { $set: table })
        // console.log('UPDATE. 22222222222222222222');
        return table
    } catch (err) {
        logger.error(`while updating table ${table._id}`, err)
        throw err
    }
}

async function getById(tableId) {
    try {
        const collection = await dbService.getCollection('tables')
        const table = await collection.findOne({ '_id': ObjectId(tableId) })
        return table
    } catch (err) {
        logger.error(`while finding table ${tableId}`, err)
        throw err
    }
}

async function setNewTable(table) {
    table.createdAt = Date.now()
    table.players = []
    return table
}

async function addUserToTable(tableId, userId) {
    try {
        // console.log('UserToTable (table.service):');
        // console.log('----------------------------');
        const table = await getById(tableId)
        const user = await userService.getById(userId)
        table.players.push(user)
        //now I need to update the table in the DB
        update(table)
        return true
    } catch (err) {
        logger.error(`while finding table ${tableId}`, err)
        throw err
    }
}

async function newRound(tableId) {
    console.log('newRound:(table.service):');
    const table = await getById(tableId)

    //Prepare dealer
    const tableAfterPrepareDealer = await prepareDealer(table)

    //Get a deck
    // console.log('NEW ROUND. 111: table', table);
    tableAfterPrepareDealer.deck = await deckService.getNewDeck()

    //Deal Deck
    const table1 = await dealDeck(tableAfterPrepareDealer)

    //Update the USERS_DB with the hands
    const tt = { ...table1 }
    updateUserDbHands(tt)

    //Prepare flop
    const tableReady = prepareFlop(table1)
    delete tableReady.deck

    const tableAfterUpdateDB = await update(tableReady)

    return tableAfterUpdateDB
}

async function prepareDealer(table) {
    var {players} = table
    var player = players.shift()
    players.push(player)
    table.players = players
    const tableAfterUpdate = await update(table)
    return tableAfterUpdate
}

function dealDeck(table) {
    //creates or resets hands to players
    for (let i = 0; i < table.players.length; i++) {
        table.players[i].hand = []
    }
    console.log('----------DEAL DECK----------');
    const loops = table.mode === 'poker' ? 2 : 4;
    for (let i = 0; i < loops; i++) {
        for (let j = 0; j < table.players.length; j++) {
            var tempCard = table.deck.shift()
            table.players[j].hand.push(tempCard)
        }
    }
    console.log('TABLE Before return:', table);
    return table
}

async function updateUserDbHands(table) {
    try {
        for (var i = 0; i < table.players.length; i++) {
            var userId = table.players[i]._id
            var tempUser = await userService.getById(userId)
            tempUser.hand = table.players[i].hand
            await userService.update(tempUser)
            // var userAfterUpdate = await userService.update(tempUser)
            // console.log('userAfterUpdate:', userAfterUpdate);
            // playersHands.push(tempHand)
        }
    } catch (err) {
        logger.error(`while Updating user Hands ${tableId}`, err)
        throw err
    }
}

function prepareFlop(table) {

    const flop = []
    //Burn first card
    table.deck.shift()
    //Add 3 cards to flop
    flop.push(table.deck.shift())
    flop.push(table.deck.shift())
    flop.push(table.deck.shift())

    //Burn second card
    table.deck.shift();
    //Add 4th card
    flop.push(table.deck.shift())

    //Burn third card
    table.deck.shift();
    //Add 5th card
    flop.push(table.deck.shift())

    table = { ...table, flop }

    return table
}






























// async function query(filterBy = {}) {
//     const criteria = _buildCriteria(filterBy)
//     try {
//         const collection = await dbService.getCollection('user')
//         var users = await collection.find(criteria).toArray()
//         users = users.map(user => {
//             delete user.password
//             user.isHappy = true
//             user.createdAt = ObjectId(user._id).getTimestamp()
//             // Returning fake fresh data
//             // user.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
//             return user
//         })
//         return users
//     } catch (err) {
//         logger.error('cannot find users', err)
//         throw err
//     }
// }

// async function getById(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ '_id': ObjectId(userId) })
//         delete user.password

//         user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
//         user.givenReviews = user.givenReviews.map(review => {
//             delete review.byUser
//             return review
//         })

//         return user
//     } catch (err) {
//         logger.error(`while finding user ${userId}`, err)
//         throw err
//     }
// }
// async function getByUsername(username) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ username })
//         return user
//     } catch (err) {
//         logger.error(`while finding user ${username}`, err)
//         throw err
//     }
// }

// async function remove(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         await collection.deleteOne({ '_id': ObjectId(userId) })
//     } catch (err) {
//         logger.error(`cannot remove user ${userId}`, err)
//         throw err
//     }
// }

// async function update(user) {
//     try {
//         // peek only updatable fields!
//         const userToSave = {
//             _id: ObjectId(user._id),
//             username: user.username,
//             fullname: user.fullname,
//             score: user.score
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.updateOne({ '_id': userToSave._id }, { $set: userToSave })
//         return userToSave;
//     } catch (err) {
//         logger.error(`cannot update user ${user._id}`, err)
//         throw err
//     }
// }

// async function add(user) {
//     try {
//         // peek only updatable fields!
//         const userToAdd = {
//             username: user.username,
//             password: user.password,
//             fullname: user.fullname,
//             score: user.score || 0
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.insertOne(userToAdd)
//         return userToAdd
//     } catch (err) {
//         logger.error('cannot insert user', err)
//         throw err
//     }
// }

// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.txt) {
//         const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
//         criteria.$or = [
//             {
//                 username: txtCriteria
//             },
//             {
//                 fullname: txtCriteria
//             }
//         ]
//     }
//     if (filterBy.minBalance) {
//         criteria.balance = { $gte: filterBy.minBalance }
//     }
//     return criteria
// }


