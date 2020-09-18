import React from 'react';
import { useStore } from '../store';

const Footer = () => {
  const {
    state: { user, age },
  } = useStore();

  return (
    <>
      <hr />
      <h1> footer </h1>
      <p>username: {user && user.username ? user.username : null}</p>
      <p>age: {age && age.age ? age.age : null}</p>
    </>
  );
};

export default Footer;
