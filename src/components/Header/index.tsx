import Filter from '../Filter';
import { HeaderContainer } from './styles';

interface HeaderProps {
    keywords: string[];
}

export default function Header({ keywords }: HeaderProps) {
    return (
        <HeaderContainer>
            <Filter keywords={keywords} />
        </HeaderContainer>
    );
}
