Template.DefaultLayout.events(
  'click #logout': (event) ->
    event.preventDefault()
    Meteor.logout()
)
