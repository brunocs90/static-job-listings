import { CloseIcon } from './CloseIcon';
import { FilterContainer, FilterPanel } from './styles';

interface FilterProps {
    keywords: string[];
    removeKeyword: (keyword: string) => void;
    clearKeywords: () => void;
}

export default function Filter({ keywords, removeKeyword, clearKeywords }: FilterProps) {
    return (
        <FilterContainer>
            <FilterPanel>
                <div>
                    {keywords.map((key, id) => (
                        <div key={id}>
                            <span>{key}</span>
                            <button className="close" onClick={() => removeKeyword(key)}>
                                <CloseIcon />
                            </button>
                        </div>
                    ))}
                </div>
                {keywords.length > 0 && (
                    <button className="clear" onClick={() => clearKeywords()}>
                        Clear
                    </button>
                )}
            </FilterPanel>
        </FilterContainer>
    );
}
