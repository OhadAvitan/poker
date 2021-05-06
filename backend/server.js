const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const tableRoutes = require('./api/table/table.routes')
const { connectSockets } = require('./services/socket.service')
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')

const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// Express App Config
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}



// routes
app.all('*', setupAsyncLocalStorage)

app.use('/api/table', tableRoutes)
// app.use('/api/user', userRoutes)

connectSockets(http, session)


const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
app.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})

console.log('console.log - server.js , backend is RUNNING')


