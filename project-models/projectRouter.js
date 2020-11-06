const router = require('express').Router()

const Project = require('../project-models/projectModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})
// @desc		Get all projects
// @route		GET /
router.get('/', (req, res) => {
    Project.findProjects()
    .then(projects => {
        res.status(202).json(projects)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

// @desc		Get all resources
// @route		GET /
router.get('/resources', (req, res) => {
    Project.findResources()
    .then(resources => {
        res.status(202).json(resources)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

// @desc		Get all resources
// @route		GET /
router.get('/tasks', (req, res) => {
    Project.findTasks()
    .then(tasks => {
        res.status(202).json(tasks)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

// @desc		Get a project by id
// @route		GET /:id
router.get('/:id', (req, res) => {

})
// @desc		Add a new project
// @route		POST /
router.post('/', (req, res) => {

})
// @desc		Update a project by id
// @route		PUT /:id
router.put('/:id', (req, res) => {

})
// @desc		Remove a project by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => {

})

module.exports = router