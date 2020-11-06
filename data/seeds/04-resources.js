
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'shovel', resource_description: 'tool'},
        {id: 2, resource_name: 'scraper', resource_description: 'tool'},
        {id: 3, resource_name: 'paint brush', resource_description: 'tool'},
        {id: 4, resource_name: 'human', resource_description: 'operator'}
      ]);
};
