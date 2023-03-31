import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./button.module.css";

const Button = ({ text, onClick, color, type }) => {
  return (
    <button
      type={type}
      className={cn(styles.button, styles[`button__${color}`])}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "",
  type: "",
  color: "",
  onClick: () => {},
};

export default Button;
