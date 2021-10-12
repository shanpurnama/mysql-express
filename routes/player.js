var express = require('express')
var router = express.Router()
var controllerPlayers = require('../controllers/players.controller')

router.get ('/', controllerPlayers.getPlayerController)
router.post('/', controllerPlayers.postPlayerController)
router.put('/:id', controllerPlayers.putPlayerController)
router.delete('/:id', controllerPlayers.deletePlayerController)

module.exports = router