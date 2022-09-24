const router = require("express").Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.list)
router.post('/', todoController.create)
router.patch('/:id', todoController.update)
router.delete('/:id', todoController.remove)

module.exports = router


