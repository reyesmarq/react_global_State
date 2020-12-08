import React, { useEffect } from 'react';
import { useStore } from '../store';
import { getGithubLogin, getGithub, getGithubUserWithThunk } from '../store/actions';

const GithubUser = () => {
  const {
    dispatch,
    state: { githubUser },
  } = useStore();

  useEffect(() => {
    dispatch(getGithubUserWithThunk());
  }, []);

  return <h3>github user: {githubUser || 'loading...'}</h3>;
};

export default GithubUser;
