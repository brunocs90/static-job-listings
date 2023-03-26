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
                <div className="tags">
                    {keywords.map((key, id) => (
                        <div className="tag-close" key={id}>
                            <span>{key}</span>
                            <button className="close" onClick={() => removeKeyword(key)}>
                                <CloseIcon />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="clear">
                    {keywords.length > 0 && (
                        <button className="btn-clear" onClick={() => clearKeywords()}>
                            Clear
                        </button>
                    )}
                </div>
            </FilterPanel>
        </FilterContainer>
    );
}
