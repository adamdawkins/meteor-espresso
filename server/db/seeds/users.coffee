# Seed files are used to create data for use while prototyping.
# This file uses the anti:fake package to get us some users quickly
# Uncomment the below and run if you need some users in a jiffy!

# Meteor.startup ->
#   number_of_users_required = 10
#   if Meteor.users.find().count() is 0
#     console.log "Creating #{number_of_users_required} users"
#     for number in [1..number_of_users_required]
#       user = Fake.user(
#         fields: [
#           'name'
#           'surname'
#           'fullname'
#           'username'
#           'email'
#           'emails.address'
#           'profile.name'
#         ]
#       )
#       user.password = 'password'
#       Accounts.createUser(user)
#     
