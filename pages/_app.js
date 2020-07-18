import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import { Header } from "../components/header/header";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/global";
import "../styles/global.css";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}
