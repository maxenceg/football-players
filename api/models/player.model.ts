import { model, Schema } from 'mongoose'

export const Player = model(
    'player',
    new Schema({
        name: String,
        position: String,
        thumbnail: String,
        signin: {
            amount: Number,
            currency: String,
        },
        born: Date,
    })
)
