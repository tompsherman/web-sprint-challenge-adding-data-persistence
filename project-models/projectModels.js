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
    .select('t.task_name', 't.task_notes', 'p.proj_name', 'p.proj_description', 't.task_complete')
}
async function createProject(project){
    const [id] = await
    db('projects').insert(project)
        return db('projects')
        .where({id})
        .first()
}
async function createResource(resource){
    const [id] = await
    db('resources').insert(resource)
        return db('resources')
        .where({id})
        .first()
}
async function createTask(task){
    const [id] = await
    db('tasks').insert(task)
        return db('tasks')
        .where({id})
        .first()
}