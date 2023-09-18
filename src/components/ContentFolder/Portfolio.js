import React from 'react';
import codingQuizPic from './projectImages/coding-quiz.jpg'
import weatherAppPic from './projectImages/weather-dashboard-picture.jpg'
import animeForumPic from './projectImages/anime-forum.png'
import passwordGenPic from './projectImages/passwordgenscreenshot.jpg'
import firstPortfolioPic from './projectImages/firstPortfolio.jpg'
import mysqlPic from './projectImages/mysql.png'
import loginPic from './projectImages/login.png'
export default function Portfolio() {
    const portfolioProjects = [
        {
          image: codingQuizPic,
          title: "Coding Quiz",
          deployedLink: "https://afrozez.github.io/coding-quiz/",
          githubRepo: "https://github.com/Afrozez/coding-quiz"
        },
        {
          image: loginPic,
          title: "TeachTogether",
          deployedLink: "https://teachtogether-ffa1db8adbe1.herokuapp.com/",
          githubRepo: "https://github.com/Afrozez/teach-together"
        },
        {
          image: weatherAppPic,
          title: "Weather App",
          deployedLink: "https://afrozez.github.io/weather-dashboard/",
          githubRepo: "https://github.com/Afrozez/weather-dashboard"
        },
        {
          image: animeForumPic,
          title: "Anime Forum",
          deployedLink: "",
          githubRepo: "https://github.com/Afrozez/anime-forum"
        },
        {
          image: passwordGenPic,
          title: "Password Generator",
          deployedLink: "https://afrozez.github.io/my-portfolio/",
          githubRepo: "https://github.com/Afrozez/passwordgenerator-03"
        },
        {
          image: firstPortfolioPic,
          title: "First Portfolio",
          deployedLink: "https://afrozez.github.io/my-portfolio/",
          githubRepo: "https://github.com/Afrozez/my-portfolio"
        },
        {
          image: mysqlPic,
          title: "SQL Employee Tracker",
          deployedLink: "",
          githubRepo: "https://github.com/Afrozez/sql-employee-tracker"
        },
      ];
      return (
        <div>
          <h2 id="project-header-text">Projects</h2>
          <div className="projects-wrapper">
            
              {portfolioProjects.map(project => (
                  <div key={project.title} className="projectFlexContainer">
                      <h3>{project.title}</h3>
                      <div>
                          <img src={project.image} alt={project.title} style={{ width: '200px', height: '150px' }} />
                      </div>
                      <a href={project.githubRepo}>GitHub Repo</a>
                      {project.deployedLink !== "" && ( // Conditional check
                          <a id="deployed-app-link" href={project.deployedLink}>Visit Deployed App</a>
                      )}
                  </div>
              ))}
          </div>
        </div>
    );
}