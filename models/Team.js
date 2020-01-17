const connection = require('../db/config');

class Team {};

Team.getAll = (callback) => {
    connection.query('SELECT * FROM Team JOIN Rider ON Rider.team_id = Team.id JOIN Motorcycle ON Motorcycle.rider_id = Rider.id;', (err, results, fields) => {
        callback(err, results, fields)
    })
}

Team.delete = (info, callback) => {
    connection.query(
        'DELETE FROM Team WHERE id=?',
        [info.id],
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )
}

module.exports = Team;