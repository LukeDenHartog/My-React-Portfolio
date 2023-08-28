import React from 'react';
import ResumePic from './projectImages/resume.pdf';

const FepList = ({ frontEndProficiencies }) => {
  return (
    <div className="proficiency-list">
      {frontEndProficiencies.map((frontEndProficiency, index) => (
        <div key={index} className="proficiency-item">
          {frontEndProficiency}
        </div>
      ))}
    </div>
  );
};

const BepList = ({ backEndProficiencies }) => {
  return (
    <div className="proficiency-list">
      {backEndProficiencies.map((backEndProficiency, index) => (
        <div key={index} className="proficiency-item">
          {backEndProficiency}
        </div>
      ))}
    </div>
  );
};

export default function Resume() {
  const frontEndProficiencies = ['HTML', 'CSS', 'Javascript', 'JQuery', 'React', 'Bootstrap'];
  const backEndProficiencies = ["API's", 'Node', 'Express', 'MySQL', 'Sequelize', 'Mongo', 'Mongoose'];
  return (
    <div className="resume-container">

      <h2 className="section-title">Front End Proficiencies</h2>
      <FepList frontEndProficiencies={frontEndProficiencies} />
      <h2 className="section-title">Back End Proficiencies</h2>
      <BepList backEndProficiencies={backEndProficiencies} />
   
      <a href={ResumePic} download="resume.pdf" className="download-link">
        <h3>Click here to download my resume!</h3>
      </a>
    </div>
  );
}
