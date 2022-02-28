import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App=()=>{
  return (
    <div className = "ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 6:00PM" content="Nice post!" avatar={faker.image.image()} />
      <CommentDetail author="Alex" timeAgo="Today at 6:25PM" content="Cool post!" avatar={faker.image.image()} />
      <CommentDetail author="Jane" timeAgo="Today at 7:06PM" content="Awesome post!" avatar={faker.image.image()} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));