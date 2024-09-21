import PropTypes from "prop-types";

const Busket = ({ busketName, count }) => {
  return (
    <div className={busketName}>
      <h1>
        {count} <span>Apples</span>
      </h1>
      <p>{busketName}</p>
    </div>
  );
};

Busket.propTypes = {
  busketName: PropTypes.string.isRequired,
  count: PropTypes.any,
};

export default Busket;
