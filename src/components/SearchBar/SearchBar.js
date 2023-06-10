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

// class SearchBar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleInputChange = event => {
//     const value = event.target.value;
//     this.setState({ inputValue: value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.inputValue);
//   };
//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
//           <button type="submit">
//             <span>Search</span>
//           </button>
//           <input
//             type="text"
//             name="image"
//             autoComplete="off"
//             placeholder="Search images and photos"
//             value={this.state.inputValue}
//             onChange={this.handleInputChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;
