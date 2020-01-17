const Team = require('../models/Team');

const showAllTeams = (req, res, next) => {
    Team.getAll((err, results) => {
        if (err) return next(err);
        return res.json({ users: results });
    });
}

const deleteTeam = (req, res, next) => {
    Team.delete(req.body, (err, results) => {
        if (err) return next(err);
        return res.json({ message: 'Team deleted' });
    });
}

module.exports = { showAllTeams, deleteTeam };