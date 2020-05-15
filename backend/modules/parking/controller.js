const express = require('express')

const router = express.Router()

const parkingSchema = require('./schema')

router.get('/', async (req, res) => {

  try {

    const parkings = await parkingSchema.find()
    return res.json(parkings)

  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Error loading parkings' });
  }
})

router.get('/:id', async (req, res) => {

  try {

    const { id } = req.params
    const model = await parkingSchema.findById(id)

    if (!model) {
      return res.status(404).send('Parking not found')
    } else {
      return res.json(model)
    }

  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Error loading parkings' });
  }
})

router.post('/', async (req, res) => {

  try {

    const { id } = req.params
    const { body } = req

    if (id) {
      await parkingSchema.updateOne({ _id: id }, { $set: body })
      const updated = await parkingSchema.findById(id)
      return res.status(202).send(updated)
    } else {
      const parking = new parkingSchema(body)
      await parking.save()
      return res.status(201).send(parking)
    }

  } catch (error) {
    return res.status(400).send({ error: 'Error creating parking' });
  }
})

router.put('/:id', async (req, res) => {

  try {

    const { id } = req.params
    const { body } = req

    await parkingSchema.updateOne({ _id: id }, { $set: body })
    const updated = await parkingSchema.findById(id)
    return res.status(202).send(updated)

  } catch (error) {
    return res.status(400).send({ error: 'Error update parking' });
  }

})

router.delete('/:id', async (req, res) => {

  try {

    const { id } = req.params

    const model = await parkingSchema.findById(id)

    if (!model) {
      return res.status(404).send('Parking not found')
    } else {
      await parkingSchema.deleteOne({ _id: id })
      return res.status(204).send('Parking removed success')
    }

  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Error deleting parking' });
  }
})

module.exports = router