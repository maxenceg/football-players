import { model, Schema } from 'mongoose'

export const Team = model(
    'team',
    new Schema({
        name: String,
        thumbnail: String,
        players: [Schema.Types.ObjectId],
    })
)
