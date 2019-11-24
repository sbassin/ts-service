let GUID = require('node-uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('repositories').del()
    .then(function () {
      // Inserts seed entries
      return knex('repositories').insert([
        { id: GUID.v4(), name: 'foorepo' },
        { id: GUID.v4(), name: 'barrepo' },
        { id: GUID.v4(), name: 'bazrepo' }
      ]);
    });
};
