import fastify from "fastify"

export default class Routers
{
    constructor()
    {
        this.server = fastify()
    }

    handle()
    {
        this.server.get('/', (req, res) => {
            return res.send('Hello World')
        })
    }

    listen()
    {
        const { PORT } = process.env
        this.server.listen(PORT)
    }
}