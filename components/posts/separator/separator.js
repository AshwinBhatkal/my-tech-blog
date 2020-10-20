import React from "react";
import StyledSeparator from "./separator.styles";
import PropTypes from "prop-types";

const Separator = ({ type }) => (
	<StyledSeparator type={type}>
		<span />
		<span />
		<span />
	</StyledSeparator>
);

Separator.propTypes = {
	type: PropTypes.string,
};

Separator.defaultProps = {
	type: "primary",
};

export default Separator;
