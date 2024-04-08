const database = require('../database/connection')

class TaskController {
    createTask(req, res) {

        const { title, description, status } = req.body

        database.insert({ title, description, status }).table('tasks').then(data => {
            res.json({ message: 'Task created successfully' })
        }).catch(error => {
            console.log(error)
        })
    }

    listTasks(req, res) {
        database.select('*').table('tasks').then(tasks => {
            res.json(tasks)
        }).catch(error => {
            console.log(error)
        })
    }

    searchTask(req, res) {
        const id = req.params.id
        database.select('*').table('tasks').where({ id: id }).then(tasks => {
            res.json(tasks)
        }).catch(error => {
            console.log(error)
        })
    }

    updateTask(req, res) {
        const id = req.params.id
        const status = req.body.status

        database.where({ id: id }).update({ status: status }).table('tasks').then(data => {
            res.json({ message: 'Task updated successfully' })
        }).catch(error => {
            console.log(error)
        })
    }

    deleteTask(req, res) {
        const id = req.params.id

        database.where({ id: id }).delete().table('tasks').then(data => {
            res.json({ message: 'Task deleted successfully' })
        }).catch(error => {
            console.log(error)
        })
    }

    
}


module.exports = new TaskController()