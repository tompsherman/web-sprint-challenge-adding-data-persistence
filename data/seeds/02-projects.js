
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, proj_name: 'basement', proj_description: 'stop the flooding', proj_complete: false},
        {id: 2, proj_name: 'landscaping', proj_description: 'create rain river and burm', proj_complete: false},
        {id: 3, proj_name: 'painting', proj_description: 'paint walls & ceiling', proj_complete: true}
      ]);
};
