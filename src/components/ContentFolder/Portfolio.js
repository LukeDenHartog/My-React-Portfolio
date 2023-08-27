import React from 'react';
import codingQuizPic from './projectImages/coding-quiz.jpg'
import weatherAppPic from './projectImages/weather-dashboard-picture.jpg'

export default function Portfolio() {
    const portfolioProjects = [
        {
          image: codingQuizPic,
          title: "Coding Quiz",
          deployedLink: "https://afrozez.github.io/coding-quiz/",
          githubRepo: "https://github.com/Afrozez/coding-quiz"
        },
        {
          image: weatherAppPic,
          title: "Weather App",
          deployedLink: "https://afrozez.github.io/weather-dashboard/",
          githubRepo: "https://github.com/Afrozez/weather-dashboard"
        },

      ];
      
      return (
        <div>
            <h1>Projects</h1>
            {portfolioProjects.map(project => (
                <div key={project.title} className="projectFlexContainer">
                    <h3>{project.title}</h3>
                    <a href={project.deployedLink}>
                        <img src={project.image} alt={project.title} style={{ width: '200px', height: '150px' }} />
                    </a>
                    <a href={project.githubRepo}>GitHub Repo</a>
                    <a href={project.deployedLink}>Visit Deployed App</a>
                </div>
            ))}
        </div>
    );
}