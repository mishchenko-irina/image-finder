import { useState } from 'react';
import propTypes from 'prop-types';

export default function ImageGalleryItem({
  key,
  littlePicture,
  name,
}) {

  const [id, setId] = useState(null);

  return (
    <>
      <li>
        <img
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