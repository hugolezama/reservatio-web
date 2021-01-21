import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import createCache from '@emotion/cache';

export const cache = createCache({ key: 'css', prepend: true });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <CacheProvider value={cache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
