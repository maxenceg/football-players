import { Router } from 'express'
import { leagueRouter } from '../controllers/league.controller'

export const router = Router()

router.use('/leagues', leagueRouter)
