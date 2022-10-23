import { db } from '../models'
import { Router } from 'express'

export const teamRouter = Router()
/**
 * @swagger
 * /teams/{teamId}:
 *   get:
 *     summary: Returns all the info for a given team.
 *     description: Retrieves the name and all the players of a team.
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         description: String ID of the team to retrieve info from.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A team's info.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Whether the query succeeded or not.
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The league's name.
 *                       example: English Premier League
 *                     players:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             description: The team's name.
 *                             example: Arsenal
 *                           players:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                   description: The player's full name.
 *                                   example: Pierre-Emerick Aubameyang
 *                                 born:
 *                                   type: Date
 *                                   description: The player's date of birth.
 *                                   example: 1989-06-19T01:37:19.198+00:00
 *                                 position:
 *                                   type: string
 *                                   description: The player's position on the field.
 *                                   example: Forward
 *                                 thumbnail:
 *                                   type: string
 *                                   description: The player's thumbnail.
 *                                   example: https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg
 *                                 signin:
 *                                   type: object
 *                                   properties:
 *                                     amount:
 *                                       type: number
 *                                       description: The player's signin amount.
 *                                       example: 15000000
 *                                     currency:
 *                                       type: string
 *                                       description: The player's signin currency.
 *                                       example: eur
 *                 error:
 *                   type: string
 *                   description: The error raised by calling the query.
 *                   example: 'Could not find the corresponding team.'
 */
teamRouter.get('/:teamId', async (req, res) => {
    try {
        const {
            params: { teamId },
        } = req
        const team = await db.team.findOne({ _id: teamId })

        if (!team) {
            res.json({
                success: false,
                error: 'Could not find the corresponding team.',
            })

            return
        }

        const players = await db.player.find({ _id: { $in: team.players } })

        res.json({ success: true, data: { name: team.name, players } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
