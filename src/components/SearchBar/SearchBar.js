import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(inputValue);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleFormSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          name="image"
          autoComplete="off"
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
