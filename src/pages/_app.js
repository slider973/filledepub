import {useEffect} from "react";

import "../styles/main.css";
import {AuthContextProvider} from "../core/auth/AuthContext";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps } ) {


    useEffect(() => {
        import("../../public/assets/js/bootstrap.bundle.min.js");
    });
    return (
        <AuthContextProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
            {/*<Component {...pageProps} />;*/}
        </AuthContextProvider>
    )
}

export default MyApp;
