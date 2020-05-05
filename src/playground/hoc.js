import React from 'react';
import ReacDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is info: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, don't share</p> }
      <WrappedComponent {...props} />
    </div>
  )
}
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? 
        (
          <WrappedComponent {...props} />
        ) 
        : (
          <p>Please Login to view info </p>
        )
      }
    </div>
  )
}
// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReacDOM.render(<AuthInfo isAuthenticated={false} info="This is the details"/>, document.getElementById('root'));