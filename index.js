// require your server and launch it

const server = require('./api/server')

port = process.env.PORT || 5000  //enviroment varibale

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})