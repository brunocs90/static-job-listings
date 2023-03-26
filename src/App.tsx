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

    function removeKeyword(keyword: string) {
        const newKeyword = filterKeywords.filter(tag => tag !== keyword);
        setFilterKeywords(newKeyword);
    }

    function clearKeywords() {
        setFilterKeywords([]);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header keywords={filterKeywords} removeKeyword={removeKeyword} clearKeywords={clearKeywords} />
            <Jobs data={data} keywords={filterKeywords} setFilterKeywords={addFilterKeywords} />
        </ThemeProvider>
    );
}
