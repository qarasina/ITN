import fastify from "fastify"
import IndexController from "../controllers";

export default class Routers
{
    constructor()
    {
        this.server = fastify()

        this.index = new IndexController()
    }

    handle(db)
    {
        this.server.get('/', this.index.index)
    }

    listen()
    {
        const { PORT } = process.env
        this.server.listen(PORT)
    }
}