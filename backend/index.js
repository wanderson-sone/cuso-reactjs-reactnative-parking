const app = require('./bin/express')
const port = 3001

app.get('/', (req, res) => {
    res.status(200).send('Page initilize')
})

app.listen(port, () => {
    console.log(`Api initilize success in port ${port}`)
});

