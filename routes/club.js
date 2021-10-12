var express = require('express')
var router = express.Router()
var contollerClubs = require('../controllers/clubsController')

router.get('/', contollerClubs.getClubController)
router.post('/', contollerClubs.postClubController)
router.put('/:id', contollerClubs.putClubController)
router.delete('/:id', contollerClubs.deleteClubContoller)

module.exports = router