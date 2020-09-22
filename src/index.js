import dotenv from 'dotenv'
import MongoDB from "./database/database"
import Routers from "./routers/routers";

async function main()
{
    await dotenv.config()

    const db = await (new MongoDB()).config()

    const routers = new Routers()

    routers.handle(db)
    routers.listen()
}

main()