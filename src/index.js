import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App=()=>{
  return (
    <div className = "ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 6:00PM" content="Nice post!" avatar={faker.image.image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 6:25PM" content="Cool post!" avatar={faker.image.image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Today at 7:06PM" content="Awesome post!" avatar={faker.image.image()} />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));