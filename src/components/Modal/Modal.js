import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './modal.module.css';

export default function Modal({ onClose, image, setSelectedImage }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={image.largeImageURL} alt="" width={'100%'} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object,
  setSelectedImage: PropTypes.func,
};
