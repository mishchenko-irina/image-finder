import { useState } from 'react';
import propTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ key, littlePicture, name }) {
  const [id, setId] = useState(null);

  return (
    <>
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={littlePicture}
          alt={name}
          id={id}
        />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  littlePicture: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};
