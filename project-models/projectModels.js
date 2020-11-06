const db = require('../data/db-config')

module.exports = {
    //function names

    findProjects,
    findResources,
    findTasks, // join with project name and description

    createProject,
    createResource,
    createTask

}

//funstions 

function findProjects(){
    return db('projects')
}
function findResources(){
    return db('resources')
}
function findTasks(){
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.task_name', 't.task_notes', 'p.proj_name', 'p.proj_description')
}
function createProject(){
    return db('projects')
}
function createResource(){
    return db('resources')
}
function createTask(){
    return db('tasks')
}