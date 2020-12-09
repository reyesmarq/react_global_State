import React, { useEffect } from 'react';
import { useStore } from '../store';
import { getGithubUserWithThunk } from '../store/actions';

const GithubUser = () => {
  const {
    dispatch,
    state: { githubUser },
  } = useStore();

  useEffect(() => {
    dispatch(getGithubUserWithThunk());
  }, []);

  return (
    <h3>
      github user:
      {githubUser?.githubUser ? githubUser.githubUser : 'loading...'}
    </h3>
  );
};

export default GithubUser;
