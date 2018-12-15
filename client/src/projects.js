import Project from './Project'

const ruby = [
  new Project(
    'BeerList-CLI-App',
    `Beer-List is an interactive CLI app that retrieves its data from BeerAdvocate.com. It populates top 20 lists based on a beers score and that beer must have no less than 100 ratings.`,
     ['Ruby', 'Nokogiri']
   ),

   new Project(
     'Unique-Characters-',
     'A CLI app that takes in a paragraph and returns largest unique set of characters without letting its length drop below 50',
     ['Ruby']
   )

]


const rubyOnRails = []
const javaScript = []
const react = []

export {ruby, rubyOnRails, javaScript, react}
