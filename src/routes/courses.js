const courseController = require('../app/controllers/CourseController');
const express = require('express');
const router = express.Router();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-action', courseController.handleFormAction);
router.post('/bin-handle-form-action', courseController.binHandleFormAction);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/delete-forever', courseController.deleteForever);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);

module.exports = router;
