const siteController = require('../app/controllers/SiteController');
const express = require('express');
const router = express.Router();

router.use('/search', siteController.search);
router.use('/:slug', siteController.home);
router.use('/', siteController.home);

module.exports = router;
