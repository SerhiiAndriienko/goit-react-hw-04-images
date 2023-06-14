import React from 'react';
import css from './LoadMore.module.css';
import PropTypes from 'prop-types';

function LoadMoreButton({ onClick }) {
  return (
    <button className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
}
export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
