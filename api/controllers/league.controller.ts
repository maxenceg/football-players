import { db } from '../models'
import { Router } from 'express'

export const leagueRouter = Router()

/**
 * @swagger
 * /leagues:
 *   get:
 *     summary: Returns all the football leagues.
 *     description: Retrieves a list of leagues.
 *     responses:
 *       200:
 *         description: A list of leagues.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The league ID.
 *                         example: abcde-12345
 *                       name:
 *                         type: string
 *                         description: The league's name.
 *                         example: English Premier League
 *                       sport:
 *                         type: string
 *                         description: The sport the league belongs to.
 *                         example: soccer
 *                       teams:
 *                         type: string[]
 *                         description: The league's team identifiers.
 *                         example: ["abcde-12345", "fghij-67890"]
 */
leagueRouter.get('/', async (_, res) => {
    try {
        const leagues = await db.league.find()

        res.json(leagues)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

/**
 * @swagger
 * /leagues/{leagueId}/teams:
 *   get:
 *     summary: Returns all the teams for a given league.
 *     description: Retrieves a list of all teams from a league.
 *     parameters:
 *       - in: path
 *         name: leagueId
 *         required: true
 *         description: String ID of the league to retrieve teams from.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of teams.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The team ID.
 *                         example: abcde-12345
 *                       name:
 *                         type: string
 *                         description: The team's name.
 *                         example: Arsenal
 *                       players:
 *                         type: string[]
 *                         description: The team's player identifiers.
 *                         example: ["abcde-12345", "fghij-67890"]
 *                       thumbnail:
 *                         type: string
 *                         description: A thumbnail of the team.
 *                         example: https://www.thesportsdb.com//images//media//team//badge//a1af2i1557005128.png
 */
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
