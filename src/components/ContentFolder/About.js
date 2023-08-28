import React from 'react';
import catAndLuke from './projectImages/catandluke.jpg';

export default function About() {
    return (
        <div>
            <div className="cl-image-container">
                <img src={catAndLuke} alt="Cat and Luke" />
            </div>
            <article className="article">
                <p className="paragraph"id="about-me-text">
                    My name is Luke A. DenHartog. I have a love for computers and new technologies. I like solving puzzles, and coding is like solving puzzles with a computer! I enrolled in an edX coding bootcamp hosted by the <a href="https://bootcamp.ce.uci.edu/">University of California, Irvine</a>. As you can see from my work section below, I have developed numerous web applications and shared them on GitHub. Creating these projects helped me develop a solid understanding of how a workplace uses tools like GitHub, <a className="href-styles" href="https://www.mongodb.com/">MongoDB</a>, MySQL, JavaScript, <a className="href-styles" href="https://nodejs.org/en">Node.js</a>, and <a href="https://coding-boot-camp.github.io/full-stack/apis/api-resources">REST APIs</a>. I also learned how to retrieve and analyze large amounts of data from MySQL and NoSQL databases using queries. I first began my software engineering journey around March 2021. I started using <a href="https://teamtreehouse.com/profiles/lukedenhartog">Teamtreehouse</a> and have been working full-time while studying different Full-Stack JavaScript in my spare time.
                    </p>
                    <p className="paragraph"id="about-me-text">
                    I currently work for a cancer testing lab named <a href="https://neogenomics.com/" id="neo-text">NeoGenomics Laboratories</a> but I'm seeking a long career in software development. Most of my life I've worked customer service roles at Target, then Costco, and then at a Sushi Restaurant as a head-server. Working as a server really taught me how asynchronous behavior works. I am a customer-oriented professional and I also feel I have great people skills from my decade of experience in dynamic workplaces. I strive to constantly improve my skills in whatever I set out to do. My mother was a school teacher, so I think I get my constant desire to learn and better myself from her. One hobby of mine is analyzing data and uncovering valuable information and patterns. Also, I'm a big fan of watching the NBA, NHL, and Star Wars content. Please feel free to email me with any inquiries. Thank you for taking the time to visit my portfolio.
                </p>
            </article>
        </div>
    );
}
