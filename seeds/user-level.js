
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user-level').del()
    .then(function () {
      // Inserts seed entries
      return knex('user-level').insert([
        { id: 99901, user: 'Ambitious Aardvark', level: false, admin: false },
        { id: 99902, user: 'Bamboozled Baboon', level: false, admin: false },
        { id: 99903, user: 'Curious Capybara', level: false, admin: false },
        { id: 99904, user: 'Dilapidated Duck', level: false, admin: false },
        { id: 99905, user: 'Exuberant Elephant', level: false, admin: false },
        { id: 99906, user: 'Fascinated Flying F', level: false, admin: false },
        { id: 99907, user: 'Generous Gila Monst', level: false, admin: false },
        { id: 99908, user: 'Hilarious Heron', level: false, admin: false },
        { id: 99909, user: 'Intransigent Impala', level: false, admin: false },
        { id: 99910, user: 'Jocular Jerboa', level: false, admin: false },
        { id: 99911, user: 'Kafkaesque Kinkajou', level: false, admin: false },
        { id: 99912, user: 'Loquacious Lemur', level: false, admin: false },
        { id: 99913, user: 'Misanthropic Mongoose', level: false, admin: false },
        { id: 99914, user: 'Nonchalant Nyala', level: false, admin: false },
        { id: 99915, user: 'Ornery Ocelot', level: false, admin: false },
        { id: 99916, user: 'Peaceful Pangolin', level: false, admin: false },
        { id: 99917, user: 'Querulous Quokka', level: false, admin: false },
        { id: 99918, user: 'Resolute Rail', level: false, admin: false },
        { id: 99919, user: 'Senescent Sloth', level: false, admin: false },
        { id: 99920, user: 'Tumultuous Terrapin', level: false, admin: false },
        { id: 99921, user: 'Unassailable Urial', level: false, admin: false },
        { id: 99922, user: 'Voracious Viscacha', level: false, admin: false },
        { id: 99923, user: 'Wondering Wombat', level: false, admin: false },
        { id: 99924, user: 'Xenial Xerus', level: false, admin: false },
        { id: 99925, user: 'Yielding Yak', level: false, admin: false },
        { id: 99926, user: 'Zaftig Zebu', level: false, admin: false },
        {id: 1, user: 'admin', level: false, admin: false},
      ]);
    });
};
