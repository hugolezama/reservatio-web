import { blue, deepOrange } from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';

export const themeAlt = createMuiTheme({
    palette: {
        primary: {
            light: lighten('#C7D8C6', 0.2),
            main: '#C7D8C6',
            dark: darken('#C7D8C6', 0.2),

            contrastText: '#fff'
        },
        secondary: {
            light: lighten('#EFD9C1', 0.1),
            main: '#EFD9C1',
            dark: darken('#EFD9C1', 0.1)
        },
        error: {
            main: red.A400
        },

        background: {
            default: '#eee'
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: '#F6F4E8',

                '&:hover': {
                    backgroundColor: darken('#F6F4E8', 0.08)
                }
            }
        }
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            light: lighten('#6BBAA7', 0.2),
            main: '#6BBAA7',
            dark: darken('#6BBAA7', 0.2),

            contrastText: '#fff'
        },
        secondary: {
            light: lighten('#FBA100', 0.1),
            main: '#FBA100',
            dark: darken('#FBA100', 0.1),
            contrastText: '#fff'
        },
        error: {
            main: red.A400
        },

        background: {
            default: '#fff'
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: '#86b3d1',
                color: '#fff',
                '&:hover': {
                    backgroundColor: darken('#86b3d1', 0.08)
                }
            }
        }
    }
});

export default theme;
