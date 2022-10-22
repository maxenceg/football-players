import { db } from '../models'
import { Router } from 'express'

export const leagueRouter = Router()

leagueRouter.get('/', async (_, res) => {
    try {
        const leagues = await db.league.find()

        res.json(leagues)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

leagueRouter.get('/:leagueId/teams', async (req, res) => {
    try {
        const {
            params: { leagueId },
        } = req
        const league = await db.league.findOne({ _id: leagueId })

        const teams = await db.team.find({ _id: { $in: league.teams } })

        res.json(teams)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
