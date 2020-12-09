const getGithubUserWithThunk = () => async (dispatch) => {
  const data = await fetch(
    'https://api.github.com/users/reyesmarq'
  ).then((res) => res.json());
  if (data) {
    dispatch({ type: 'github_login', payload: data.login });
  }
};

export { getGithubUserWithThunk };
