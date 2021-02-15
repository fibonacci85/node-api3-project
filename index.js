// require your server and launch it

const server = require('./api/server')


server.listen(4600, () => {
    console.log('server running on port 4600')
})