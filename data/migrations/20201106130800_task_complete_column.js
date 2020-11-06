
exports.up = function(knex) {
  return knex.schema
    .table('tasks', table => {
      table.boolean('task_complete')
  })
};

exports.down = function(knex) {
  return knex.schema.table('tasks', table => {
      table.dropColumn('task_complete')
  })
};
