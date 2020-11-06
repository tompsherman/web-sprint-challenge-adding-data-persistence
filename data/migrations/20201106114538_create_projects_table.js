
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments()
        table.string('proj_name', 128).notNullable().unique()
        table.string('proj_description', 128)
        table.boolean('proj_complete')
    })
    .createTable('tasks', table => {
        table.increments()
        table.string('task_name', 128).notNullable()
        table.string('task_notes', 128)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('resources', table => {
        table.increments()
        table.string('resource_name', 128).notNullable()
        table.string('resource_description', 128)
    })
    .createTable('task_resources', table => {
        table.increments()
        table.integer('task_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tasks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
