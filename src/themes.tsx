import red from '@material-ui/core/colors/red';
import { createMuiTheme, darken, lighten } from '@material-ui/core/styles';

const primaryColor = '#6BBAA7';
const secondaryColor = '#FBA100';
const defaultColor = '#86b3d1';
const contrastTextColor = '#fff';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: lighten(primaryColor, 0.2),
            main: primaryColor,
            dark: darken(primaryColor, 0.2),
            contrastText: contrastTextColor
        },
        secondary: {
            light: lighten(secondaryColor, 0.1),
            main: secondaryColor,
            dark: darken(secondaryColor, 0.1),
            contrastText: contrastTextColor
        },
        error: {
            main: red.A400
        },

        background: {
            default: contrastTextColor
        },
        text: {
            primary: darken(primaryColor, 0.5),
            hint: darken(primaryColor, 0.1)
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: defaultColor,
                color: contrastTextColor,
                '&:hover': {
                    backgroundColor: darken(defaultColor, 0.08)
                }
            },
            outlined: {
                borderColor: defaultColor,
                color: darken(defaultColor, 0.1),
                '&:hover': {
                    backgroundColor: lighten(defaultColor, 0.95)
                }
            },
            text: {
                color: darken(defaultColor, 0.1),
                '&:hover': {
                    backgroundColor: lighten(defaultColor, 0.95)
                }
            }
        }
        // MuiOutlinedInput: {
        //     root: {
        //         '&:hover $notchedOutline': {
        //             borderColor: primaryColor
        //         }
        //     },
        //     input: {
        //         color: darken(primaryColor, 0.5)
        //     },
        //     notchedOutline: {
        //         borderColor: primaryColor,
        //         color: primaryColor
        //     }
        // }
    }
});

export const themeAlt = createMuiTheme({
    palette: {
        primary: {
            light: lighten('#C7D8C6', 0.1),
            main: darken('#C7D8C6', 0.05),
            dark: darken('#C7D8C6', 0.1),
            contrastText: darken('#a9b7c0', 0.5)
        },
        secondary: {
            light: lighten('#EFD9C1', 0.2),
            main: '#EFD9C1',
            dark: darken('#EFD9C1', 0.1),
            contrastText: darken('#a9b7c0', 0.5)
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
                color: darken('#a9b7c0', 0.5),

                '&:hover': {
                    backgroundColor: darken('#F6F4E8', 0.08)
                }
            },

            outlined: {
                color: darken('#F6F4E8', 0.7),
                borderColor: darken('#F6F4E8', 0.7),

                '&:hover': {
                    backgroundColor: darken('#F6F4E8', 0.08)
                }
            },
            outlinedPrimary: {
                color: darken('#C7D8C6', 0.5),
                borderColor: darken('#C7D8C6', 0.3),

                '&:hover': {
                    backgroundColor: lighten('#C7D8C6', 0.5),
                    borderColor: darken('#C7D8C6', 0.3)
                }
            },

            outlinedSecondary: {
                color: darken('#EFD9C1', 0.3),
                borderColor: darken('#EFD9C1', 0.1),

                '&:hover': {
                    backgroundColor: lighten('#EFD9C1', 0.5),
                    borderColor: darken('#EFD9C1', 0.1)
                }
            },
            text: {
                color: darken('#a9b7c0', 0.5)
            }
        }
    }
});

export default theme;
