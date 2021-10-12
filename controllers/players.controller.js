var clubDB = require('../clubDB')


function getPlayerController(req, res) {
    clubDB.query('SELECT players.player_name, players.id, players.gender, players.age, clubs.club_name FROM players INNER JOIN clubs ON clubs.id = players.clubId', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })

// router.get ('/', function (req, res) {
//     clubDB.query('SELECT * FROM players', function (err, data) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send(data)
//         }
//     })
// })
}

function postPlayerController(req, res) {
    var data = {
        player_name: req.body.player_name,
        age: req.body.age,
        gender: req.body.gender,
        clubId: req.body.clubId
    }
    clubDB.query('INSERT INTO players SET ?', data, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.send('success add new player')
        }
    })
}

function putPlayerController(req, res) {
    var sql = `UPDATE players SET player_name = '${req.body.player_name}', age = '${req.body.age}', gender = '${req.body.gender}' WHERE id = ${req.params.id}`
    clubDB.query(sql, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.send('successed update new data')
        }
    })
}


function deletePlayerController(req, res) {
    var sql = `DELETE FROM players WHERE id = ${req.params.id}`
    clubDB.query(sql, function (err) {
        if (err) {
            console.log(err)
        } else {
            res.send('successed to remove')
        }
    })
}
module.exports = {
    getPlayerController,
    postPlayerController,
    putPlayerController,
    deletePlayerController
}