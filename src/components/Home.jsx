import React, { useRef } from 'react';
import GithubUser from './GithubUser';

const Home = () => {
  const renders = useRef(0);

  return (
    <>
      <h1>home {renders.current++}</h1>
      <GithubUser />
    </>
  );
};

export default Home;
