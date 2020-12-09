import React from 'react';
import { useStore } from '../store';

const ShowUser = () => {
  const {
    state: { user, age },
  } = useStore();

  return (
    <>
      <p>
        username:
        {user?.username ? user.username : null}
      </p>
      <p>
        age:
        {age?.age ? age.age : null}
      </p>
    </>
  );
};

export default ShowUser;
