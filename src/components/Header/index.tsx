import Filter from '../Filter';
import { HeaderContainer } from './styles';

interface HeaderProps {
    keywords: string[];
    removeKeyword: (keyword: string) => void;
    clearKeywords: () => void;
}

export default function Header({ keywords, removeKeyword, clearKeywords }: HeaderProps) {
    return (
        <HeaderContainer>
            {keywords.length > 0 && (
                <Filter keywords={keywords} removeKeyword={removeKeyword} clearKeywords={clearKeywords} />
            )}
        </HeaderContainer>
    );
}
