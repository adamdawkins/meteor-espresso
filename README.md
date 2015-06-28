# Meteor Espresso: The shot your Meteor project needs to start prototyping fast
Meteor is a great tool for prototyping.

The Meteor community knows this so well that it has created several really useful packages to help prototype things straight away. 

As part of my (Prototyping With Meteor)[http://prototypingwith.meteor.com] course, I've started to put together this repository as a great starting point for new Prototype projects.

## The Goal
The purpose is simple, to give you everything you need to get started on an app idea as quickly as possible. 

## Getting Started
create a folder for your project

```bash
$ mkdir my-project-name
$ cd my-project-name
```
clone the repository
```bash
git clone https://github.com/adamdawkins/meteor-espresso.git .
```
remove the git repository and README.md and start your own:

```bash
rm -fr .git
rm README.md
git init
git add --all .
git commit -m 'Initial commit from Meteor Espresso'
```
## Don't Meteor boilerplates already exist?
Yes, they do, but this one focuses on prototypes. I probably wouldn't use some of the packages in this if I was starting an application where I had no need to prototype it first. This is all about speed.

## The Packages
So far, this repository includes the following packages:
#### Meteor core
* `meteor-platform` (obviously)
* `autopublish`
* `insecure`

#### Code
* `coffeescript`
* `underscore`
* `less`

#### CSS Framework
* `twbs:bootstrap`

#### Automation
* [`sacha:autorouter`](https://atmospherejs.com/sacha/autorouter)
* `aldeed:autoform` (Coming Soon)
* `aldeed:collection2` (For use with autoform, coming soon)

#### Routing
* [`iron:router`](https://atmospherejs.com/iron/router) This is included with `sacha:autorouter`, but this sets up a default layout.

### Login
* `accounts-password`
* [`useraccounts:bootstrap`](https://atmospherejs.com/useraccounts/bootstrap)

#### Seeds
* [`anti:fake`](https://atmospherejs.com/anti/fake)

## The Directory Structure
Directory structure may not be that important when prototyping, but by giving you a structure upfront the hope is that:

* You'll be able to out-grow the prototyping tools without having to do too much mass re-organisation.
* If you have to stop a project and come back to it, there's enough structure here for you to work out what's going on.

```
├── README.md
├── client
│   ├── stylesheets
│   │   └── app.less
│   └── views
│       ├── accounts
│       │   └── sign-in.html
│       ├── home.html
│       ├── layout.coffee
│       └── layout.html
├── lib
│   ├── app.coffee
│   ├── collections
│   │   └── collections.coffee
│   └── router.coffee
└── server
    └── db
        └── seeds
            └── users.coffee
```

I've included comments in most files, so they should be pretty self-explanatory.

## To-do
* Add decaf branch (sans coffeescript)
* Add `autoform` with example form.
* Add mobile-app version with ionic/without bootstrap.

## Contributing
Sure, get involved; especially if you want to add a version that just works better for you (e.g. different CSS framework, vanilla javascript).

Bonus points if you name your branch after an espresso-based drink.
