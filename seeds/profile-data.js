
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 2, user_id: 99902, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'Vestibulum hendrerit posuere tempor'},
        {id: 3, user_id: 99903, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'Maecenas convallis est et est aliquam posuere.'},
        {id: 4, user_id: 99904, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'Proin eu consectetur justo, at gravida mauris.'},
        {id: 5, user_id: 99905, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'Nullam in nisi at ipsum tempor finibus id id nunc.'},
        {id: 6, user_id: 99906, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'Aliquam sit amet blandit nunc.'},
        {id: 7, user_id: 99907, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'Sed in scelerisque massa.'},
        {id: 8, user_id: 99908, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'Donec vitae iaculis justo, eget pharetra mauris.'},
        {id: 9, user_id: 99909, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 10, user_id: 99910, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 11, user_id: 99911, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 12, user_id: 99912, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 13, user_id: 99913, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 14, user_id: 99914, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 15, user_id: 99915, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 16, user_id: 99916, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 17, user_id: 99917, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 18, user_id: 99918, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 19, user_id: 99919, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 20, user_id: 99920, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 21, user_id: 99921, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 22, user_id: 99922, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 23, user_id: 99923, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 24, user_id: 99924, url: 'https://www.worldometers.info/coronavirus/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 25, user_id: 99925, url: 'https://www.stuff.co.nz/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
        {id: 26, user_id: 99926, url: 'https://www.delfi.lv/', image: 'https://picsum.photos/200', description: 'hasellus finibus vulputate sem vitae pharetra.'},
      ]);
    });
};
