import Project from './Project'

const ruby = [
  new Project(
    'BeerList-CLI-App',
    `Beer-List is an interactive CLI app that retrieves its data from BeerAdvocate.com. It populates top 20 lists based on a beers score and that beer must have no less than 100 ratings.`,
     ['ruby'],
     'https://github.com/RickySauce/BeerList-CLI-App'
   ),

   new Project(
     'Unique-Characters',
     'A CLI app that takes in a paragraph and returns the largest unique set of characters without letting its length drop below 50.',
     ['ruby'],
     'https://github.com/RickySauce/Unique-Characters-'
   ),

   new Project(
     'Beer-Review-Sinatra',
     `A beer Forum designed to allow users to interact with each other about their favorite beers.
     ⦁ Utilizes the Sinatra backend framework for ruby, to create functionable routes.
     ⦁ Uses ActiveRecord to save data.`,
     ['ruby', 'sql'],
     'https://github.com/RickySauce/Beer-Review-Sinatra'
   )
]

const rubyOnRails = [
  new Project(
    'Home-Brews-Rails ',
    `An application designed to document and share a user's brewing recipes.
    ⦁ Built with a Ruby on Rails backend.
    ⦁ Persists data with SQL via activerecord.
    ⦁ Utilizes rails generators to handle the quick creation of controllers, models and migrations.`,
    ['ruby','rails', 'sql'],
    ' https://github.com/RickySauce/HomeBrews-Rails'
  ),

  new Project(
    'BeerReview-JQUERY',
    `Adopted its idea from Beer-Review-Sinatra.
    ⦁ Built with a Ruby on Rails backend instead of Sinatra.
    ⦁ Uses the jQuery library on the frontend.`,
    ['ruby','rails','sql','javascript','jquery'],
    'https://github.com/RickySauce/BeerReview-JQUERY'
  )
]
const javaScript = []
const react = []

export {ruby, rubyOnRails, javaScript, react}
