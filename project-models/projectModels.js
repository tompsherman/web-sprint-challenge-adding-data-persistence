const db = require('../data/db-config')

module.exports = {
    //function names

    find,

}

//funstions 

function find(){
    return db('projects')
}