import express from 'express';
import database from '../db/mongodb.js'
import { ObjectId } from 'mongodb';
var router = express.Router();

//collections
const servicesCollection = database.collection("services");

// get all services
router.get('/', async function (request, response) {
    const cursor = await servicesCollection.find({}).toArray();
    response.send(cursor);
});

// get specific service details
router.get('/:id', async (request, response) => {
    const id = request.params.id;
    const query = { _id: ObjectId(id) };
    const cursor = await servicesCollection.findOne(query);
    response.send(cursor);
});




export default router;
