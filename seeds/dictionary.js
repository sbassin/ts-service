exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dictionary').del()
    .then(function () {
      // Inserts seed entries
      return knex('dictionary').insert([
        { id: 1, word: 'dare' },
        { id: 2, word: 'dear' },
        { id: 3, word: 'read' },
        { id: 4, word: 'other' }
      ]);
    });
};
