import {MongoClient} from "mongodb";

const handler = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_KEY);

        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        res.status(201).json({ message: 'Meetup inserted!' })
    }
}
export default handler;
