import React, { useState } from 'react';
import { useStore } from '../store';

const Section = () => {
  const [usernameInput, setUserNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const { dispatch } = useStore();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'rename', payload: usernameInput });
          setUserNameInput('');
        }}
      >
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUserNameInput(e.target.value)}
        />
        <button type="submit">set username</button>
      </form>

      <br />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'age', payload: ageInput });
          setAgeInput('');
        }}
      >
        <input
          type="text"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
        />
        <button type="submit">set age</button>
      </form>
    </>
  );
};

export default Section;
