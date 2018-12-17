import Project from './Project'

const ruby = {
    imageUrl: '',
    projects: [
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
          Utilizes the Sinatra backend framework for ruby, to create functionable routes.
          Uses ActiveRecord to save data.`,
         ['ruby', 'sql'],
         'https://github.com/RickySauce/Beer-Review-Sinatra'
       )
    ]
  }

const rubyOnRails = {
    imageUrl: '',
    projects: [
      new Project(
        'Home-Brews-Rails ',
        `An application designed to document and share a user's brewing recipes.
         Built with a Ruby on Rails backend.
         Persists data with SQL via activerecord.
         Utilizes rails generators to handle the quick creation of controllers, models and migrations.`,
        ['rails', 'sql'],
        ' https://github.com/RickySauce/HomeBrews-Rails'
      ),

      new Project(
        'BeerReview-JQUERY',
        `Adopted its idea from Beer-Review-Sinatra.
         Built with a Ruby on Rails backend in place of Sinatra.
         Uses the jQuery library on the frontend.`,
        ['rails','javascript','jquery'],
        'https://github.com/RickySauce/BeerReview-JQUERY'
      )
    ]
  }

const react = {
    imageUrl: '',
    projects: [
      new Project(
        'BeerReview-REACT',
        `Idea adopted from Beer-Review-Sinatra.
         Built with a React front end for an entirely redirectless user experience.
         Makes use of React-Browser to simulate navigation to other routes within the app.
         Uses Redux for easy update of the global store`,
         ['rails','sql','react'],
         'https://github.com/RickySauce/BeerReview-REACT'
      ),

      new Project(
        'Joes-Breakfast-Shop',
        `an application built for the startup company, 'Errunds', who abruptly stopped all communication with me after I explained how it was built.
        Built with a React frontend.
        Built on a Rails backend.
        Utilizes the ActiveRecord ORM coupled with a Sqlit3 database.`,
        ['rails','sql','react'],
        'https://github.com/RickySauce/Joes-Breakfast-Shop'
      ),

      new Project(
        'NFl-Pickems',
        `designed to make weekly NFL pickem pools more convenient for groups of friends.
         Makes use of the ruby gem Farraday to send http requests to a third-party API.
         Works with dynamic time objects to give a user the most accurate game time information.`,
         ['rails','sql','react'],
         'https://github.com/RickySauce/NFl-Pickems'
      )
    ]
  }

export {ruby, rubyOnRails, react}
