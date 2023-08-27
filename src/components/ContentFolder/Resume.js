import React from 'react';

const FepList = ({ frontEndProficiencies }) => {
  return (
    <div>
      {frontEndProficiencies.map((frontEndProficiency, index) => (
        <div key={index}>{frontEndProficiency}</div>
      ))}
    </div>
  );
};

const BepList = ({ backEndProficiencies }) => {
    return (
        <div>
          {backEndProficiencies.map((backEndProficiency, index) => (
            <div key={index}>{backEndProficiency}</div>
          ))}
        </div>
      );
}

export default function Resume() {
  const frontEndProficiencies = ['HTML', 'CSS', 'Javascript', 'JQuery', 'React', 'Bootstrap'];
  const backEndProficiencies = ["API's", 'Node', 'Express', 'MySQL', 'Sequelize', 'Mongo', 'Mongoose']
  return (
    <div>
      <h2>front end Proficiencies</h2>
      <FepList frontEndProficiencies={frontEndProficiencies} />
      <h2>back end Proficiencies</h2>
      <BepList backEndProficiencies={backEndProficiencies}/>
    </div>
  );
}