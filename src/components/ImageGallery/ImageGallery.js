import { useState } from 'react';
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default function ImageGallery({ images, load }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    setSelectedImage(image);
  };
  const handleModalClose = e => {
    if (e.target.tagName === 'DIV') {
      setSelectedImage(null);
    }
  };
  return (
    <div>
      <ul className={css.ImageGallery}>
        {images &&
          images.map(image => {
            return (
              <li className={css.ImageGalleryItem} key={image.id}>
                <div onClick={() => handleImageClick(image)}>
                  <ImageGalleryItem oneImage={image}></ImageGalleryItem>
                </div>
              </li>
            );
          })}
      </ul>
      {selectedImage && (
        <Modal
          setSelectedImage={setSelectedImage}
          image={selectedImage}
          onClose={handleModalClose}
        ></Modal>
      )}
      {load && <Loader />}
    </div>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array,
  load: PropTypes.bool,
};
