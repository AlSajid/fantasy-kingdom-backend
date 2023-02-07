import express from 'express';
import database from '../db/mongodb.js'
var router = express.Router();

//collections
const orderCollection = database.collection("orders");

//add order
router.post('/', async (request, response) => {
    const order = request.body;
    const result = await orderCollection.insertOne(order);
    response.send(result);
});

// get user's order list
router.get('/:email', async (request, response) => {
    const email = request.params.email;
    const query = { email: email };
    const cursor = orderCollection.find(query);
    const myOrders = await cursor.toArray();
    response.send(myOrders);

});

// get all order list
router.get('/', async (request, response) => {
    const cursor = orderCollection.find({});
    const myOrders = await cursor.toArray();
    response.send(myOrders);
});


// delete specific order
router.delete('/:id', async (request, response) => {
    const id = request.params.id;
    const query = { _id: ObjectId(id) };
    const result = await orderCollection.deleteOne(query);
    response.json(result);
})



export default router;



