// Seed files are used to create data for use while prototyping.
// This file uses the anti:fake package to get us some users quickly
// Uncomment the below and run if you need some users in a jiffy!

/*
Meteor.startup(function() {
  var i,
      numberOfUsersRequired = 10;

  if (Meteor.users.find().count() === 0) {
    console.log("Creating " + numberOfUsersRequired + " users");
    for (i = 0; i < numberOfUsersRequired.length; i++) {
      user = Fake.user({
        fields: ['name', 'surname', 'fullname', 'username', 'email', 'emails.address', 'profile.name']
      });
      user.password = 'password';
      results.push(Accounts.createUser(user));
    }
  }
});
*/
