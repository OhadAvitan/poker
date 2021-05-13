// import

// module.exports = {
//     insert,
//     query,
//     getById,
//     setDeckToGame
// }

// async function getById(tableId) {
//     try {
//         const collection = await dbService.getCollection('tables')
//         const table = await collection.findOne({ '_id': ObjectId(tableId) })
//         return table
//     } catch (err) {
//         logger.error(`while finding table ${tableId}`, err)
//         throw err
//     }
// }