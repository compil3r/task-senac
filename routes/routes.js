const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controller/TaskController')

router.post('/task', TaskController.createTask)
router.get('/tasks', TaskController.listTasks)
router.get('/task/:id', TaskController.searchTask)
router.put('/task/:id', TaskController.updateTask)
router.delete('/task/:id', TaskController.deleteTask)


module.exports = router