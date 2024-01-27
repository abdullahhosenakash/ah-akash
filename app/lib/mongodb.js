import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

const clientPromise = client.connect();
const db = client.db('ahAkashPortfolio');
const projectsCollection = db.collection('projects');
export default projectsCollection;
