const app = require('./bin/express')
const bodyParser = require('body-parser')
const controllerParking = require('./modules/parking/controller')
const port = 3001

app.use(bodyParser.json())
app.use('/api/parking', controllerParking)


app.listen(port, () => {
  console.log(`Api initilize success in port ${port}`)
});

