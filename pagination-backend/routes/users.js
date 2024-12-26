var express = require('express');
var router = express.Router();
const {createUser, pagination} = require('../controllers/paginationController')

router.post('/create',createUser)
router.get('/pagination',pagination)

module.exports = router;
