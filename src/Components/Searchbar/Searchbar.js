import { useState } from 'react';
import propTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Enter the query!');
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
