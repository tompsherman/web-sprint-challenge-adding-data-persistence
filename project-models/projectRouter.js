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


// @desc		Add a new project
// @route		POST /
router.post('/', (req, res) => {
    Project.createProject(req.body)
    .then(project => res.status(201).json(project))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

// @desc		Add a new project
// @route		POST /
router.post('/resource', (req, res) => {
    Project.createResource(req.body)
    .then(resource => res.status(201).json(resource))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

// @desc		Add a new project
// @route		POST /
router.post('/task', (req, res) => {
    Project.createTask(req.body)
    .then(task => res.status(201).json(task))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

module.exports = router