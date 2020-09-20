import React from 'react';
import { useStore } from '../store';

const ShowUser = () => {
  const {
    state: { username, age },
  } = useStore();

  return (
    <>
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

export default ShowUser;
