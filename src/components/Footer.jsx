import React, { useRef } from 'react';
import { useStore } from '../store';

const Footer = () => {
  const {
    state: { age, user },
  } = useStore();

  // console.log('state', state);

  const renders = useRef(0);

  return (
    <>
      <hr />
      <h1>footer || renders: {renders.current++}</h1>
      <p>username: {user?.username ? user.username : null}</p>
      <p>age: {age?.age ? age.age : null}</p>
    </>
  );
};

export default Footer;
