const getGithubUser = () => async (dispatch) => {
  dispatch({ type: 'github_login', payload: 'Mauricio' });
};

const getGithubLogin = async () => {
  const data = await fetch(
    'https://api.github.com/users/reyesmarq'
  ).then((res) => res.json());

  if (data) {
    return data.login;
  }
};

const getGithub = async () => {
  const data = await fetch(
    'https://api.github.com/users/reyesmarq'
  ).then((res) => res.json());
  if (data) {
    return data.login
  }
};

const getGithubUserWithThunk = () => async (dispatch) => {
  const data = await fetch(
    'https://api.github.com/users/reyesmarq'
  ).then((res) => res.json());
  if (data) {
    dispatch({ type: 'github_login', payload: data.login });
  }
}

export { getGithubUser, getGithubLogin, getGithub, getGithubUserWithThunk };
