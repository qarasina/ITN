import { MongoClient } from 'mongodb'

export default class MongoDB
{
    async config()
    {
        const { URL } = process.env

        return MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
            console.log("Connected successfully to server")
            if (err) throw err
            return client
        })
    }
}
