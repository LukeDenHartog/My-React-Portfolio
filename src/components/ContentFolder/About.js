import React from 'react';
import catAndLuke from './projectImages/catandluke.jpg';

export default function About() {
    return (
        <div>
            <div className="cl-image-container">
                <img src={catAndLuke} alt="Cat and Luke" />
            </div>
            <article className="article">
            <p className="paragraph" id="about-me-text">
    My name is Luke A. DenHartog. I have a love for computers and new technologies. I enjoy solving puzzles, and coding is kind of like solving puzzles with a computer! I recently completed a edX coding bootcamp hosted by the <a href="https://bootcamp.ce.uci.edu/">University of California, Irvine</a>. As you can see from my portfolio section, I have developed numerous web applications and shared them on GitHub. Creating these projects helped me develop a solid understanding of how workplaces utilize tools like GitHub, <a className="href-styles" href="https://www.mongodb.com/">MongoDB</a>, MySQL, JavaScript, <a className="href-styles" href="https://nodejs.org/en">Node.js</a>, and <a href="https://coding-boot-camp.github.io/full-stack/apis/api-resources">REST APIs</a>. I have also learned how to retrieve and analyze large amounts of data from MySQL and NoSQL databases using queries.
</p>
<p className="paragraph" id="about-me-text">
     Currently I'm employed at <a href="https://neogenomics.com/" id="neo-text">NeoGenomics Laboratories</a>, a premier cancer diagnostic company, but I am seeking a long career in software development. Most of my life, I've worked in customer service roles. My first job was at Target, then Costco, and later at a Sushi Restaurant as a head server. Working as a server has given me valuable insights into asynchronous behavior. I am a customer-oriented professional and have honed my people skills over a decade of experience in dynamic workplaces. I am dedicated to continually enhancing my skills in every pursuit. My mother was a school teacher, and I believe I inherit my constant desire for learning and self-improvement from her. One of my hobbies involves analyzing data and uncovering valuable information and patterns. Additionally, I'm an avid fan of watching NBA, NHL, and Star Wars content. Please don't hesitate to email me with any inquiries. Thank you for taking the time to explore my portfolio.
</p>

            </article>
        </div>
    );
}
