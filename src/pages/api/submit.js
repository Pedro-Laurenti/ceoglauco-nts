import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const collection = database.collection(process.env.MONGODB_COLLECTION);
            const result = await collection.insertOne(formData);

            res
                .status(200)
                .json({message: 'Dados inseridos com sucesso', result});
        } catch (error) {
            console.error('Erro ao inserir dados:', error);
            res
                .status(500)
                .json({error: 'Erro ao inserir dados'});
        } finally {
            await client.close();
        }
    } else {
        res
            .status(405)
            .json({message: 'Método não permitido'});
    }
}