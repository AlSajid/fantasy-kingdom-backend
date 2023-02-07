import express from 'express';
import database from '../db/mongodb.js'
var router = express.Router();

//collections
const bookingsCollection = database.collection("bookings");

//add booking
router.post('/', async (request, response) => {
    const booking = request.body;
    const result = await bookingsCollection.insertOne(booking);
    response.send(result);
});

// get user's booking list
router.get('/:email', async (request, response) => {
    const email = request.params.email;
    const query = { email: email };
    const cursor = bookingsCollection.find(query);
    const mybookings = await cursor.toArray();
    response.send(mybookings);

});

// get all booking list
router.get('/', async (request, response) => {
    const cursor = bookingsCollection.find({});
    const mybookings = await cursor.toArray();
    response.send(mybookings);
});


// delete specific booking
router.delete('/:id', async (request, response) => {
    const id = request.params.id;
    const query = { _id: ObjectId(id) };
    const result = await bookingsCollection.deleteOne(query);
    response.json(result);
})



export default router;



