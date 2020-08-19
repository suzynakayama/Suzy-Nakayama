let projectsData = [
  {
    name: "Code Mentoring",
    image: "/images/cm.png",
    url: "https://codementoring.co/",
    git: "https://github.com/code-mentoring/learn",
    description:
      "Code Mentoring is an international community that provides mentoring, coaching and a welcoming platform for developers of all levels to improve their skills. We are creating the “duolingo” (learning platform) for coding. Note: the project is on progress.",
    difficulties:
      "This is a great project where I am being able to improve, not only my technology knowledge, but also my leadership style. I am leading the frontend team throughout this project with month-long sprints and regular meetings to coordinate the project's features/bugs and how to prioritize them. Also working in collaboration with the project manager and designers to understand mock-ups and the flow of the entire site.",
    technologies:
      "NextJs, ReactJs, Typescript, GraphQL, Apollo, Styled Components, Lerna, StoryBook and Figma.",
  },
  {
    name: "Yuki, the Chatbot!",
    image: "/images/yuki.png",
    url: "https://yuki-chatbot.herokuapp.com/",
    git: "https://github.com/suzynakayama/chatbot",
    description:
      "Chatbot created using the Botkit starter that won 1st place at MintBean's Hackathon.",
    difficulties:
      "I created this when I participated in MintBean's Hackathon. Since this was my first time creating a bot, I had a hard time at the beginning trying to understand how does the library works and what/where should I code in order to make the bot work and answer.",
    technologies: "Tech: Botkit, Node, CSS.",
  },
  {
    name: "Footer NPM Package",
    image: "/images/npm-logo.png",
    url: "https://www.npmjs.com/package/react-myfooter",
    git: "https://github.com/suzynakayama/myfooter-package",
    description:
      "React Component NPM Package with my footer, to be easier to use on my react projects.",
    difficulties:
      "I created this when I participated in MintBean's Hackathon. I couldn't finish on time because I had to learn how to deal with Webpack and Babel, but after the Hackathon was done, I kept reading the docs until I found a solution to my problems. My biggest challenge was making the CSS work on this file when compiling and publishing. I figure out that I needed to install the style-loader and css-loader modules and add them to my webpack config file.",
    technologies: "Tech: CSS, React, Typescript, Webpack, and Babel.",
  },
  {
    name: "The Path",
    image: "/images/path.jpeg",
    url: "https://the-path.herokuapp.com/",
    git: "https://github.com/suzynakayama/the-path",
    description:
      "This is a MERN stack Single Page App (SPA) where the user can create his account, plan a trip, search for places to visit and create daily itineraries.",
    difficulties:
      "This was my final Bootcamp project. I had a week to develop this website and I think the hardest part for me was having to figure out how to have the user choose the places he wanted to go on each day and make the places appear on those days list. I ended up using an array of those places and whenever the checkbox was checked, I would add to the array and when the checkbox was unchecked I would remove from the array. Then, the user created an itinerary, this array would be added to it and then, the state is refresh and the checkboxes are unchecked",
    technologies:
      "React, React Hooks, Redux, Javascript, CSS, Bootstrap, Node.js, Express, MongoDb, Mongoose, 3rd party API's, and Heroku.",
  },
  {
    name: "Jobbly",
    image: "/images/jobbly.png",
    url: "https://jobbly-tracker.herokuapp.com/",
    git: "https://github.com/suzynakayama/jobbly",
    description:
      "Responsive full-stack CRUD application that helps users to keep track of their job search maintaining a database of applications and contacts, adding interviews on their calendar and staying updated with the latest tech news.",
    difficulties:
      "This was my 3rd project on the Bootcamp, it was a group project and I think the hardest part for me was having to do all the frontend by myself, while also helping with the backend. We only had a week to finish and this was a big project with several small details to it, but we prevailed.",
    technologies:
      "HTML/Django Templates, CSS, Themestr, Python, API’s, Django, PostgreSQL, AWS S3, and Heroku.",
  },
  {
    name: "Flappy Iron Man",
    image: "/images/flappyIM.png",
    url: "https://flappy-iron-man.netlify.app/",
    git: "https://github.com/suzynakayama/flappy-iron-man-phaser",
    description:
      "Flappy bird style game. Learning how to create games with Phaser 3.",
    difficulties:
      "It was really fun to do this game and learn a little bit about the physics of the game. Still having a few problems with the hulk image because it is square and, while passing through his left hand, even if iron man doesn't touch it, it might touch the white space of the square image and iron man will loose. I'm planning on fixing it on photoshop and try again. I am also planning to add new features and tweaking the game a little.",
    technologies: "HTML, JavaScript, Phaser3, Parcel and Netlify.",
  },
  {
    name: "Simon 2.0 World",
    image: "/images/simon.png",
    url: "https://suzynakayama.github.io/simon/",
    git: "https://github.com/suzynakayama/simon",
    description:
      "Static page game. My version of the electronic Simon game but with 8 colors instead of 4. Created with 2 modes: infinite and leveled, where the user can choose how many levels he wants to play. Made responsively to be playable at smartphones.",
    difficulties:
      "This was my first project during the Bootcamp and at that time I didn't know how asynchronous JavaScript worked. My biggest challenge with this project was making the computer turn function and figure out how to make the computer know when it's its time to play or wait for the player to play. With the help of my instructor I found out that one way to do it is to use setTimeout within another setTimeout.",
    technologies: "HTML, CSS, JavaScript, and GitHub Pages.",
  },
  {
    name: "Instagames",
    image: "/images/instagames.png",
    url: "https://myinstagames.herokuapp.com/",
    git: "https://github.com/suzynakayama/instagames",
    description:
      "Responsive full-stack CRUD games platform, where developers can add their games, comment on other developers’ games, play, and read their code.",
    difficulties:
      "This was my 2nd Bootcamp project and definitely my favorite. My biggest challenge was to figure out how to implement the live search bar, so as you type it reloads live. I ended up creating a regex of input query and searching the games with that regex.",
    technologies:
      "HTML/EJS, CSS, Materialize, JavaScript, Node.Js, Express, AJAX, API’s, MongoDb, Mongoose, MongoDb Atlas, and Heroku.",
  },
  {
    name: "Rock Paper Scissors Lizard Spock",
    image: "/images/rpsls.png",
    url: "https://suzynakayama.github.io/RockPaperScissorsLizardSpock/",
    git: "https://github.com/suzynakayama/RockPaperScissorsLizardSpock",
    description:
      "Static page game. Rock Paper Scissors Lizard Spock game from The Big Bang Theory Tv Show. ",
    difficulties:
      "I created this game to practice what I have learned in class. It was really fun to create this game and I think the biggest challenge for me was to make the go button to disappear, the count to appear and then the count disappear and the winner appear. I ended up using setTimeout and a few variables that I would check what 'state' should I be showing at the moment",
    technologies: "HTML, CSS, JavaScript, and GitHub Pages.",
  },
  {
    name: "Tic-Tac-Toe",
    image: "/images/tictactoe.png",
    url: "https://suzynakayama.github.io/TicTacToe/",
    git: "https://github.com/suzynakayama/TicTacToe",
    description:
      "Static page game. The old and always loved Tic-Tac-Toe game developed with a modern neon design.",
    difficulties:
      "I created this game to practice what I have learned in class. My greatest challenge was learning how to deal with box-shadow in CSS to make it neon like.",
    technologies: "HTML, CSS, JavaScript, and GitHub Pages.",
  },
];

export default projectsData;
