import { db } from '../models'
import { Router } from 'express'

export const teamRouter = Router()

teamRouter.get('/:teamId', async (req, res) => {
    try {
        const {
            params: { teamId },
        } = req
        const team = await db.team.findOne({ _id: teamId })

        const players = await db.player.find({ _id: { $in: team.players } })

        res.json({ name: team.name, players })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
