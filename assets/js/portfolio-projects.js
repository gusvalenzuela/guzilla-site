function Project(obj) {
    this.id = obj.id;
    this.version = ``;
    this.title = ``;
    this.name = obj.name;
    this.lead = ``;
    this.description = ``;
    this.url = obj.url;
    this.repo_url = obj.repo_url;
    this.img_src = obj.img_src;
    this.img_alt = `img_alt`;
}

const weatherApp = {
    id: `weatherApp`,
    name: `Weather App`,
    url: `https://gusvalenzuela.github.io/weather-youLikeIt-orNot/`,
    repo_url: `https://github.com/gusvalenzuela/weather-youLikeIt-orNot`,
    img_src: `./assets/images/pedro-lastra-Nyvq2juw4_o-unsplash.jpg`
}
const quizDownGame = {
    id: `quizDownGame`,
    name: `QuizDown?!`,
}
var projectsArray = [
    {
        // index: 0,
        id: `quizDownGame`,
        version: `1.1`,
        title:``,
        name: `QuizDown?!`,
        lead: ``,
        description: `A timed quiz game with multiple quizzes to choose from`,
        url: `https://gusvalenzuela.github.io/quiz-game/`,
        repo_url: `https://github.com/gusvalenzuela/quiz-game`,
        img_src: `./assets/images/quizgame-bg.jpg`,
        img_alt: `Lady with glasses browsing the computer while chewing a pencil`,
    },
    {
        // index: 1,
        id: `hungryHippos`,
        version: "2.0",
        title:``,
        name: `Grocery List Builder`,
        lead: ``,
        description: `A grocery list builder from recipe search. Search by cuisine, ingredient, or meal.`,
        url: `https://gusvalenzuela.github.io/Hungry-Hippos-GRV/`,
        repo_url: `https://github.com/gusvalenzuela/Hungry-Hippos-GRV`,
        img_src: `./assets/images/hh-groceries-unsplash.jpg`,
        img_alt: ``,
    },
    {
        // index: 2,
        id: `passwordGenerator`,
        version: "1.2",
        title:``,
        name: `Password Generator`,
        lead: ``,
        description: ``,
        url: `https://gusvalenzuela.github.io/pswd-generator/`,
        repo_url: `https://github.com/gusvalenzuela/pswd-generator`,
        img_src: `./assets/images/marcos-mayer-8_NI1WTqCGY-unsplash.jpg`,
        img_alt: `padlocks locked on a wire rope`,
    },
    {
        // index: 3,
        id: `dayPlanner`,
        version: "1.0",
        title:``,
        name: `Work Day Planner`,
        lead: ``,
        description: ``,
        url: `https://gusvalenzuela.github.io/day-planner-bootcamp/`,
        repo_url: `https://github.com/gusvalenzuela/day-planner-bootcamp`,
        img_src: `./assets/images/marten-bjork-rH8O0FHFpfw-unsplash.jpg`,
        img_alt: `day planner open and hands writing on a sticky note`,
    }, 
    new Project(weatherApp)
]



console.log(projectsArray)