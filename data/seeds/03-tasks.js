
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_name: 'strip floor covering', task_notes: '', project_id: 1},
        {id: 2, task_name: 're-apply floor covering', task_notes: '', project_id: 1},
        {id: 3, task_name: 'pray', task_notes: '', project_id: 1},
        {id: 4, task_name: 'mark house grading area', task_notes: '', project_id: 2},
        {id: 5, task_name: 'dig', task_notes: '', project_id: 2}
      ]);
};
