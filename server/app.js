import jsonServer from 'json-server'

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://njmwas.github.io')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

export default server