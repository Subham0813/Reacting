import PropTypes from "prop-types";

const ChildrenPassing = ({ children, name }) => {
  return (
    <div className="alert alert-primary">
      {name} : {children}
    </div>
  );
};

ChildrenPassing.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ChildrenPassing;
