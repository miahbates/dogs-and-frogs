# [Founders and Coders](https://www.foundersandcoders.com/) (apprenticeship) 

## Dogs and Frogs! 🐶 🐸

*Co-authored with  [Juliette](https://github.com/julietteorpen), [Oli](https://github.com/duckRabbitPy) and [Adam](https://github.com/adam8-9).*

A place for to post about your beloved dogs and frogs! 

<img width="1416" alt="Screenshot 2022-04-24 at 01 39 50" src="https://user-images.githubusercontent.com/78933903/175790178-5f7414a5-f623-4e91-a80d-e6883d4670ac.png">

## Team members
* Scrum Facilitator - Juliette
* UX Design - Miah
* DevOps - Adam
* Quality Assurance - Oli

## How to install 🛠️
* `git clone https://github.com/miahbates/dogs-and-frogs`
* run `npm install` in your terminal to install the dependencies.
* run `npm run dev` in your terminal to start the server.

## Local Database Setup
* run `./scripts/create_db <name of your local database>`
* run `./scripts/populate_db`
* run `psql`
* run `\connect <name of your local database>`
* run `\dt` to check the tables are there. There should be only one table named "reviews"
* To start sever run command `npm run dev`
* For cypress testing run command `npm run test`

Access locally on [localhost:3000](http://localhost:3000/)

## User Stories :busts_in_silhouette:
### Core User stories
- [x] When I'm logged in, I want to see a newsfeed of dogs and frogs.
- [x] I want an app that uploads an image to a site.
- [x] As a user, I want my information to be secure and safe.
- [x] I want to be able to see my own profile and upload images
- [x] I want to be able to delete my own posts
- [x] I want to be able to log in
- [x] I want to be able filter for dogs and frogs
- [x] I want to be able to comment on other people's profiles 
### Acceptance Criteria
- [x] Forms for users to sign up and log in
- [x] A form for users to submit data only accessible to logged in users
- [x] A page showing all the data
- [x] A way for logged in users to delete their own data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [x] Hidden environment variables (i.e. not on GitHub)
- [x] Express server
- [x] Well-organised modular codebase
- [x] Postgres database
- [x] Hosted on Heroku
- [x] One of the spike topics
- [ ] Validate user-submitted data on the server (some more to be done..)
- [x] Handle errors and inform the user
- [x] Styled appropriately
### Stretch
- [ ] I want to be able to log in via Github 
- [ ] I want to be able to comment on other people's profiles 
- [ ] GitHub Actions CI setup to run your tests when you push
- [ ] I want to be able to log in via Github

## Features: 🌟
* Authentication implemeneted. 
* Profile page. 
* Able to filter for dogs or frogs.
* Image upload feature.

## Learning 🌱
* We can build a stable, professional app
* We can handle errors without our server crashing
* We can communicate problems to the user
* We can research and implement complex new features on our own

## Improvements and future ideas ✨
* Host on Heroku.
* Be able to like posts on homepage.
* Implement github actions to automate tests.










