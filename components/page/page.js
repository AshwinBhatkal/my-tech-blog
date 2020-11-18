import React from "react";
import StyledPage from "./page.styles";
import PropTypes from 'prop-types';

/**
 * Page is the 'main' component for the app. At the very least, it takes up the entire area of the screen other than the header
 */
const Page = ({ children, background }) => (
    <StyledPage background={background}>{children}</StyledPage>
);

Page.propTypes = {
    background: PropTypes.string,
    children: PropTypes.any
}

Page.defaultProps = {
    children: null,
    background: "white"
}

export default Page;
