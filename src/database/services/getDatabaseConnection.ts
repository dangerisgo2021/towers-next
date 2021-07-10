import { MongoClient } from "mongodb";

// noinspection JSUnresolvedVariable
let uri = process.env.MONGODB_URI;
// noinspection JSUnresolvedVariable
let dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  console.error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  console.error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
 }

export async function getDatabaseConnection() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
