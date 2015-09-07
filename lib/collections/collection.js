// This file is a template of an example Posts collection using
// Collection2 and Autoform. You can reuse in and get started quickly by replacing "Post" with your collection name 
// (and "Posts" with the plural, for those of you with a Cacti collection)

// We define global Collections and Schemas objects at the start
// for use in the client (see /client/helpers.js)

// Define them in each collection file avoids load order issues

/*
Collections = typeof Collections === 'undefined' ? {} : Collections;
Schemas = typeof Schemas === 'undefined' ? {} : Schemas;
*/

// Setup the Mongo Collection
//Posts = Collections.Posts = new Mongo.Collection('posts');

// Setup the Schema (singular)
/*
Schemas.Post = new SimpleSchema({
  title: {
    type: String
  },
  body: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  }
});
*/

// Attach the Schema to the Collection
//Posts.attachSchema(Schemas.Post);