const express = require('express');
const router = express.Router();
const { showAllTeams, deleteTeam } = require('../controllers/pages-controller');

/* GET home page. */
router.get('/', showAllTeams);

router.post('/delete', deleteTeam)

module.exports = router;
