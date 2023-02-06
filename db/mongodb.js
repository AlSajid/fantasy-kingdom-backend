import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@myfirstcluster.duw99.mongodb.net/`;
const client = new MongoClient(uri);
const database = client.db("fantasyKingdomDB")

export default database;
