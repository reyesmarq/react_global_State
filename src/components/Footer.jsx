import React from 'react';
import { useStore } from '../store';

const Footer = () => {
  const {
    state: { username, age },
  } = useStore();

  return (
    <>
      <hr />
      <h1> footer </h1>
      <p>
        username:
        {username ? username : null}
      </p>
      <p>
        age:
        {age ? age : null}
      </p>
    </>
  );
};

export default Footer;
