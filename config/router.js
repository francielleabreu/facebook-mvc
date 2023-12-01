const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/feed', controller.getHomepage)
router.get('/feed/:id', controller.getFeed)
router.get('/feed/edit/:id', controller.editPost)
router.post('/add-message', controller.addMessage)
router.post('/edit-message/:id', controller.editMessage)
router.post('/feed/delete/:id', controller.deleteMessage)

module.exports = router