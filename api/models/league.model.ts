import { model, Schema } from 'mongoose'

export const League = model(
    'league',
    new Schema({
        name: String,
        sport: String,
        teams: [Schema.Types.ObjectId],
    })
)
