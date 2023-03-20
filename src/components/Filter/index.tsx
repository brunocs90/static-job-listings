import { CloseIcon } from './CloseIcon';
import { FilterContainer } from './styles';

interface FilterProps {
    keywords: string[];
}

export default function Filter({ keywords }: FilterProps) {
    return (
        <FilterContainer>
            <ul>
                {keywords.map((key, id) => {
                    return (
                        <li key={id}>
                            {key}
                            <button className="close">
                                <CloseIcon />
                            </button>
                        </li>
                    );
                })}
                <button className="clear">Clear</button>
            </ul>
        </FilterContainer>
    );
}
