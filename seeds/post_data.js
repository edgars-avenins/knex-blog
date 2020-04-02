
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 99901, title: 'The remarkable trip', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 2, user_id: 99901, title: 'Should you or not?', content: 'Sed imperdiet placerat arcu, vitae lacinia est fermentum a.'},
        {id: 3, user_id: 99903, title: 'If ifs and ands then they were pots and pans', content: 'Cant really say anything about that, huh?'}
      ]);
    });
};
