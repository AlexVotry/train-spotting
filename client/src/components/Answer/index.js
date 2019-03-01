import React from 'react';

const Answer = (props) => {
  console.log('props', props);
  if (props.showAnswer) {
    return (
      <div className="col s6">
        <h3>{props.answer}</h3>
      </div>
    );
  };
  return null;
}

export default Answer;
