import Project from './Project'

const ruby = {
    imageUrl: 'data:image/png;base64,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',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png',
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
    imageUrl: 'https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png',
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
