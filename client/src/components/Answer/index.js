import React from 'react';

const Answer = (props) => {
  console.log('props', props);
  if (props.showAnswer) {
    return (
      <div className="col s8 right">
        <h4>{props.answer}</h4>
      </div>
    );
  };
  return null;
}

export default Answer;
