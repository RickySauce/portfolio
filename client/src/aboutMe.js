import {WorkHistory, SchoolHistory} from './HistoryObjects'

const myLife = `Howdy Partner! My name is Eric DeSimone. I'm an aspiring web developer with an obscenely plethoric knowledge of movie quotes. I am born and bred in Queens, New York and consider myself fiercely loyal to my borough. I attended SUNY Cortland and graduated with my BA in Anthropology. Post-college I somewhat fell into the beer industry. I received a sales internship for a local distributor in East Williamsburg during my first summer after college and instantaneously fell in love with craft beer. From there I transitioned into a full-time sales position with Anheuser-Busch. Strapped with ambition and a fervorous passion to succeed, I decided to take the dive into the abyss and seek pastures anew. I interviewed and ended up taking a position with a small brewery in Long Island, Great South Bay Brewery. My experience was unpleasurable to say the least and eventually led to my resignation. Frustrated with recent events I decided to pursue a long dormant interest of mine, programming. I started with Youtube tutorials and a couple of Lynda courses, but eventually found my way to the Flatiron School. I enrolled in and completed the Full-Stack Web Development course in October of 2018. I have since continued to hone my skills and pick up new technologies along the way. I love to speak about myself, not only as a developer, but as an individual. I strongly encourage anyone reading this to click on my contact card and reach out to me in which ever way is convenient for them!`

const workHistory = [
]

const schoolHistory = [
  new SchoolHistory(
    'Academy of American Studies',
    2005,
    2009,
  ),
  new SchoolHistory(
    'SUNY Cortland',
    2009,
    2014,
    'BA',
    'Anthropology'
  ),
  new SchoolHistory(
    'Flatiron School',
    null,
    2018,
    null,
    'Full-Stack Web Development'
  )
]


export {myLife, workHistory, schoolHistory}
