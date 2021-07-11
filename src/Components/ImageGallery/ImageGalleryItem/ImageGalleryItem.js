import { useState } from 'react';
import propTypes from 'prop-types';

import Modal from './../../Modal/Modal';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  key,
  littlePicture,
  largePicture,
  name,
}) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const toggleModal = imageId => {
    setShowModal(showModal => !showModal);
    setId(imageId);
  };

  return (
    <>
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={littlePicture}
          alt={name}
          id={id}
          onClick={toggleModal}
        />
      </li>
      {showModal && (
        <Modal src={largePicture} alt={name} onClose={toggleModal} />
      )}{' '}
    </>
  );
}

ImageGalleryItem.propTypes = {
  littlePicture: propTypes.string.isRequired,
  largePicture: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  showModal: propTypes.func.isRequired,
};
