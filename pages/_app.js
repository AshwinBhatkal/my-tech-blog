import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import { Header } from "../components/header/header";
import { Provider } from "../store";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/global";
import "../styles/global.css";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider>
                <ThemeProvider theme={theme["light"]}>
                    <GlobalStyles />
                    <Header />
                    {/* Why is Main not here? 
                        It gives me the flexibility of extending 
                        the properties of the component whenever required
                    */}
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}
