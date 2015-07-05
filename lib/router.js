// We're going to start by using sacha:autorouter, which automatically creates
// routes for us. This file is here for when we outgrow autorouter and need some
// routes of our own.
// Autorouter maps '/' to a template named `home`
//
// /templateName will look for a template named `templateName` 
// (e.g. /about will display the `about` template.)
//
// /collectionName
//
// If the route segment happens to be the name of a collection,
// the package will additionally set the data context of the route,
// using an object of the same name as the collection.
//
// So if you have a collection named posts 
// (as in Posts = new Mongo.Collection("posts")),
// the context for the route /posts will be set to:
//
// {
//   posts: Posts.find()
// }

Router.configure({
  layoutTemplate: 'DefaultLayout'
});
