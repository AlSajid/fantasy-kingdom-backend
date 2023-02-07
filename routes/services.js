import express from 'express';
import database from '../db/mongodb.js'
import { ObjectId } from 'mongodb';
var router = express.Router();

//collections
const servicesCollection = database.collection("services");


// POST API
// app.post('/', async (request, response) => {

//     // create a document to insert
//     const service = {
//         title: "Combo Package",
//         include: [
//             "One Ticket for One person",
//             "Fantasy Kingdom Entry",
//             "8 Rides at Fantasy Kingdom",
//             "Water Kingdom Entry",
//             "Unlimited Rides at Water Kingdom",
//             "Xtreme Racing 3 Lap / 3D Cinema",
//             "Lunch / Dinner"
//         ],
//         price: 1500,
//         image: "https://fantasykingdom.net/wp-content/uploads/2021/08/combo-package-2.jpg",
//         description: "How to avail: Customers have to show the soft copy of this invoice to the information counter of Fantasy Kingdom Complex.<br/> <br/>Ticket validity: 15 days validity will be available from the invoice date.The ticket is not refundable.<br/> <br/>Park guidelines: Free Entry for Children under 3 feet to Fantasy Kingdom park only.Outside foods are not allowed.Some rides can be closed for maintenance.Everyone is required to wear a face mask during the visit.Temperature checks will be required upon arrival, and guests with a temperature of 100.4 degrees or greater will not be admitted.Management reserves the right to change the terms and conditions without any prior reason.<br/> <br/>Park Hours: Sunday - Thursday: 11 AM – 7: 00 PM and Friday & Saturday / Holiday: 10AM – 8: 00PM."
//     }

//     const result = await servicesCollection.insertOne(service);
//     response.send(result);
// })

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
