import React, { useRef } from 'react';
import { useStore } from '../store';

const Footer = () => {
  const {
    state: { username, age },
  } = useStore();

  const renders = useRef(0);

  return (
    <>
      <hr />
      <h1> footer {renders.current++}</h1>
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
