// tbl.increments('id').primary(); // primary key
//     tbl.integer('recipeId').references('id').inTable('recipes');
//     tbl
//       .dateTime('createdAt')
//       .notNullable()
//       .defaultTo(knex.fn.now());
//     tbl.string('comment', 500).notNullable();

exports.seed = function(knex, Promise) {
  return knex('comments')
    .del() // delete all comments
    .then(function() {
      return knex('comments').insert([
        {
          id: 1,
          recipesId: 1,
          comment:
            'Spicy jalapeno bacon ipsum dolor amet aliqua sed t-bone porchetta shank cow leberkas in nulla. Fugiat ham sed aliquip ad shoulder. Shoulder meatball nisi boudin kevin adipisicing quis rump duis eiusmod fugiat. Mollit non doner corned beef.',
          plusOne: 3,
          minusOne: 2
        },
        {
          id: 2,
          recipesId: 1,
          comment:
            'Ribeye beef doner incididunt turducken nulla. Shank brisket pork belly quis do. Pariatur buffalo incididunt, leberkas enim doner tri-tip pork loin sed excepteur pork ham hock cillum cupidatat.',
          plusOne: 5,
          minusOne: 1
        },
        {
          id: 3,
          recipesId: 1,
          comment:
            'Culpa tail laborum kielbasa shank. Consectetur deserunt elit, landjaeger rump bresaola bacon aute. Sed beef bresaola alcatra venison, jerky commodo minim et. Chuck spare ribs bacon cillum landjaeger.',
          plusOne: 22,
          minusOne: 1
        },
        {
          id: 4,
          recipesId: 1,
          comment:
            'Short ribs spare ribs eiusmod est dolore ut shankle. Meatloaf doner brisket cillum biltong pariatur frankfurter cupidatat pork belly velit meatball lorem chuck beef ribs pig.',
          plusOne: 12,
          minusOne: 4
        },
        {
          id: 5,
          recipesId: 1,
          comment:
            'Cupidatat esse ipsum culpa reprehenderit ham hock sunt, spare ribs rump ham.',
          plusOne: 35,
          minusOne: 2
        },
        {
          id: 6,
          recipesId: 1,
          comment:
            'Dolore pork belly pork loin, consectetur shankle incididunt beef id.',
          plusOne: 14,
          minusOne: 4
        },
        {
          id: 7,
          recipesId: 1,
          comment:
            'Tempor kielbasa consequat exercitation venison sausage. Sint labore ea anim. Shank buffalo ribeye, bacon pork pig laborum qui culpa aute boudin eiusmod nulla.',
          plusOne: 22,
          minusOne: 9
        },
        {
          id: 8,
          recipesId: 1,
          comment:
            'Deserunt fugiat pariatur boudin, dolore in tenderloin pancetta id. Pork chop chicken ut, bacon turducken cupidatat ea dolore picanha pig shank ball tip t-bone ut.',
          plusOne: 2,
          minusOne: 1
        },
        {
          id: 9,
          recipesId: 1,
          comment:
            'Biltong swine leberkas, sirloin pork belly tail minim dolore enim aliqua et strip steak bresaola non qui.',
          plusOne: 3,
          minusOne: 0
        },
        {
          id: 10,
          recipesId: 2,
          comment:
            'Aute rump qui ribeye spare ribs lorem elit ad ut irure ham hock strip steak corned beef.',
          plusOne: 13,
          minusOne: 4
        },
        {
          id: 11,
          recipesId: 2,
          comment:
            'Velit pastrami short ribs pariatur ball tip. Strip steak pork loin ut veniam, filet mignon deserunt ham hock dolore.',
          plusOne: 22,
          minusOne: 1
        },
        {
          id: 12,
          recipesId: 2,
          comment:
            'Nulla nostrud consectetur fatback turducken sirloin, est tail ribeye aute bacon cillum minim.',
          plusOne: 15,
          minusOne: 0
        },
        {
          id: 13,
          recipesId: 2,
          comment:
            'Mollit frankfurter sed salami ad. Short ribs swine commodo salami pig spare ribs turducken ea.',
          plusOne: 15,
          minusOne: 2
        },
        {
          id: 14,
          recipesId: 2,
          comment:
            'In cillum veniam meatball flank pork belly. Meatloaf brisket excepteur nisi ad swine aliquip cupim ut porchetta cillum est drumstick. Anim ball tip ut beef ribs ullamco hamburger boudin consectetur tri-tip ribeye cillum et turkey.',
          plusOne: 33,
          minusOne: 7
        },
        {
          id: 15,
          recipesId: 2,
          comment:
            'Fatback tri-tip et quis. Irure ipsum filet mignon meatloaf aute, pariatur tenderloin sunt frankfurter ground round. Irure adipisicing nulla spare ribs culpa picanha veniam capicola reprehenderit enim burgdoggen flank tenderloin sed t-bone. Alcatra chicken pastrami salami ex. Aliquip ut shankle, jerky porchetta buffalo cow fugiat sed eu est tongue. Ball tip nisi sint rump.',
          plusOne: 22,
          minusOne: 5
        },
        {
          id: 16,
          recipesId: 2,
          comment:
            'Veniam alcatra cupim lorem cow flank. Elit duis ham deserunt fugiat beef.',
          plusOne: 5,
          minusOne: 33
        },
        {
          id: 17,
          recipesId: 2,
          comment:
            'Veniam turducken proident corned beef, tenderloin leberkas consequat pork adipisicing.',
          plusOne: 3,
          minusOne: 15
        },
        {
          id: 18,
          recipesId: 2,
          comment:
            'Burgdoggen ut andouille flank t-bone leberkas commodo incididunt sint.',
          plusOne: 12,
          minusOne: 12
        },
        {
          id: 19,
          recipesId: 3,
          comment:
            'Ullamco t-bone consectetur brisket culpa shoulder, kielbasa tail rump.',
          plusOne: 14,
          minusOne: 112
        },
        {
          id: 20,
          recipesId: 3,
          comment: 'Dolore swine pork belly ea, nostrud anim sirloin ribeye.',
          plusOne: 122,
          minusOne: 16
        },
        {
          id: 21,
          recipesId: 3,
          comment:
            'Et ipsum pork chop shank adipisicing short loin. Shank leberkas tenderloin ullamco, cupidatat sunt pastrami sint beef ribs. Ad pork loin boudin aliqua. Salami capicola qui aliquip dolore non swine porchetta mollit consectetur t-bone occaecat shankle prosciutto deserunt.',
          plusOne: 45,
          minusOne: 3
        },
        {
          id: 22,
          recipesId: 3,
          comment:
            'Turducken ground round shoulder ullamco. Veniam sunt in non minim et tail.',
          plusOne: 77,
          minusOne: 2
        },
        {
          id: 23,
          recipesId: 3,
          comment:
            'Ex nulla ipsum reprehenderit andouille capicola biltong enim cow pork chop deserunt prosciutto shoulder pancetta.',
          plusOne: 63,
          minusOne: 4
        },
        {
          id: 24,
          recipesId: 3,
          comment:
            'Esse officia drumstick commodo jerky jowl cupim. In voluptate proident, irure spare ribs cupidatat jerky ribeye.',
          plusOne: 66,
          minusOne: 2
        },
        {
          id: 25,
          recipesId: 3,
          comment: 'Do pork belly tongue, flank chicken mollit hamburger anim.',
          plusOne: 64,
          minusOne: 4
        },
        {
          id: 26,
          recipesId: 3,
          comment:
            'Cupidatat ham labore sint, nostrud dolore do buffalo tempor burgdoggen velit nisi brisket meatball.',
          plusOne: 62,
          minusOne: 4
        },
        {
          id: 27,
          recipesId: 3,
          comment:
            ' Proident ut ut anim ad capicola enim mollit frankfurter buffalo pork chop. Ut cupidatat pig ground round officia, adipisicing ullamco commodo aute tri-tip drumstick culpa shoulder biltong. Dolore voluptate excepteur exercitation elit, eiusmod nulla frankfurter minim kielbasa shank.',
          plusOne: 23,
          minusOne: 3
        }
      ]);
    });
};
