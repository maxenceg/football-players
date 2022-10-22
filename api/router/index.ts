import { Router } from 'express'
import { leagueRouter } from '../controllers/league.controller'
import { teamRouter } from '../controllers/team.controller'

export const router = Router()

router.use('/leagues', leagueRouter)
router.use('/teams', teamRouter)
