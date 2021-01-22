import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/themes';
import '@testing-library/jest-dom';

const Providers = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
