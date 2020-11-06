
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('task_resources').insert([
        {id: 1, task_id: 1, resource_id: 2},
        {id: 2, task_id: 2, resource_id: 3},
        {id: 3, task_id: 3, resource_id: 4},
        {id: 4, task_id: 4, resource_id: 4},
        {id: 5, task_id: 5, resource_id: 1}
      ]);
};
