const mongoose = require('mongoose')
const moment = require('moment')

const parkingSchema = mongoose.Schema({
    vehicle: {
        type: String,
        require: true
    },
    vehiclePlate: {
        type: String,
        require: true
    },
    parkingStartAt: {
        type: Date,
        require: true
    },
    parkingEndtAt: {
        type: Date
    },
    pricePerHour: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

parkingSchema.index({ vehicle: 1, vehiclePlate: 1, parkingStartAt: 1 })

parkingSchema.virtual('parkingCost').get(function () {
    const costPerMinute = this.pricePerHour / 60
    const _parkingEndAt = this.parkingEndtAt ? moment(this.parkingEndtAt) : moment()
    const _parkingStartAt = moment(this.parkingStartAt)
    const diffMinutes = _parkingEndAt.diff(_parkingStartAt, 'minutes')

    if(diffMinutes > 0){
        return (costPerMinute + diffMinutes).toFixed(2)
    } else {
        return (0.00).toFixed(2)
    }
})

module.exports = mongoose.model('parking', parkingSchema)