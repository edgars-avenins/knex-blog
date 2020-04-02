
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 99901, title: 'The remarkable trip', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna ut nisi hendrerit fringilla. Integer faucibus, erat vel hendrerit tempor, nunc risus ornare felis, et consequat erat massa vel velit. Vivamus tincidunt ornare nibh, fringilla cursus arcu. Duis felis lorem, tristique et interdum in, interdum eu mauris. Aliquam malesuada fringilla enim. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer et justo non velit placerat sodales ac ut sem. Duis purus purus, iaculis eu dui quis, placerat accumsan purus. Pellentesque aliquet erat et dui fermentum, eget consequat lectus ultrices. Aenean hendrerit enim eget arcu vehicula, iaculis euismod dui sollicitudin.'},
        {id: 2, user_id: 99901, title: 'Should you or not?', content: 'Sed imperdiet placerat arcu, vitae lacinia est fermentum a. Phasellus ut mollis augue. Maecenas consequat convallis erat, vel aliquam lectus efficitur at. Quisque consequat elementum elit ut sagittis. Vestibulum sodales at erat quis laoreet. Donec non malesuada turpis. Etiam magna elit, posuere sit amet bibendum vitae, blandit quis mauris. Fusce in diam vitae nibh varius ultricies id vitae diam. Aliquam pulvinar elit vel ipsum gravida feugiat. Vestibulum eu posuere risus. Sed varius tincidunt erat, et porttitor lorem lobortis et. Phasellus eget diam lorem. Proin non iaculis ligula. In ipsum odio, bibendum vel arcu ornare, sagittis auctor diam. In sit amet massa vulputate elit scelerisque dictum.'},
        {id: 3, user_id: 99903, title: 'If ifs and ands then they were pots and pans', content: 'Cant really say anything about that, huh?'}
      ]);
    });
};
