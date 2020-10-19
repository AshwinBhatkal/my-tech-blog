import React from "react";
import StyledButton from "./button.styles";
import PropTypes from "prop-types";

/**
 * The accent button is for emphasising a call to action
 */
const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
    type: PropTypes.oneOf(["primary", "accent"]),
    children: PropTypes.any,
    size: PropTypes.oneOf(["small", "medium", "large", "x-large", "xx-large"]),
    weight: PropTypes.oneOf([400, 500, 600, 700]),
};

Button.defaultProps = {
    size: "large",
    weight: 600,
};

export default Button;
