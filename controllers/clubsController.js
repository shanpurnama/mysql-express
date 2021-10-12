const clubDB = require('../clubDB')

function getClubController (req, res) {
    clubDB.query('SELECT * FROM clubs', function (err, dataClub) {
        if (err) {
            console.log(err)
        } else {
            res.send(dataClub)
        }
    })
}

function postClubController(req, res){
    var newDataClub = {
        club_name: req.body.club_name,
        city: req.body.city
    }
    clubDB.query('INSERT INTO clubs SET ?', newDataClub, function (err){
        if (err) {
            console.log(err)
        } else {
            res.send('success add new clubs')
        }
    })
}

function putClubController(req, res) {
    var sqlClub = `UPDATE clubs SET club_name = '${req.body.club_name}', city = '${req.body.city}' WHERE id = ${req.params.id}`
    clubDB.query(sqlClub, function (err,) {
        if (err) {
            console.log(err)
        } else {
            res.send('success update new clubs')
        }
    })
}

function deleteClubContoller(req, res) {
    var sqlDeleteClub = `DELETE FROM clubs WHERE id = ${req.params.id}`
    clubDB.query(sqlDeleteClub, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.send('success to delete by id')
        }
    })
}
module.exports = {
    getClubController,
    postClubController,
    putClubController,
    deleteClubContoller
}