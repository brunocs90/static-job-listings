import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import { useState } from 'react';
import data from '../data.json';
import Jobs from './components/Jobs';

export function App() {
    const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

    function addFilterKeywords(keyword: string) {
        if (!filterKeywords.includes(keyword)) {
            setFilterKeywords([...filterKeywords, keyword]);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header keywords={filterKeywords} />
            <Jobs data={data} setFilterKeywords={addFilterKeywords} />
        </ThemeProvider>
    );
}
