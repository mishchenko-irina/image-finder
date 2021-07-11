import propTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;
