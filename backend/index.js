const app = require('./bin/express')
const Parking = require('./module/parking/parking-schema')
const moment = require('moment')
const port = 3001

app.get('/', async (req, res) => {
    // res.status(200).send('Page initilize')
    // const pk = await Parking.create({
    //     vehicle: 'Voyage',
    //     vehiclePlate: 'BRAZIL-1234',
    //     parkingStartAt: moment(),
    //     pricePerHour: 10
    // })

    const all = await Parking.find()
    res.status(200).send(all)

});

app.listen(port, () => {
    console.log(`Api initilize success in port ${port}`)
});

