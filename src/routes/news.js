const newsController = require('../app/controllers/NewsController');
const express = require('express');
const router = express.Router();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
