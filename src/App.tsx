import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import data from '../data.json';
import Jobs from './components/Jobs';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header />
            <Jobs data={data} />
        </ThemeProvider>
    );
}
