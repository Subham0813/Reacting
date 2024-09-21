import PropTypes from "prop-types";

const Button = ({ url, name, title, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={name} title={title}>
      <img  src={url} alt={name} />
    </button>
  );
};

Button.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Button;
