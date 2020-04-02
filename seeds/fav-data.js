
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        {user_id: 99901, fav_id: '99902,99903,99904,99905,99906,99907'},
        {user_id: 99902, fav_id: '99901,99911,99921'},
        {user_id: 99903, fav_id: '99905,99901,99902,99903'}
      ]);
    });
};
