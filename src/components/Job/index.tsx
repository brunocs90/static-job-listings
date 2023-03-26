import { IJob } from '../Interfaces';
import { DescriptionContainer, JobContainer, Logo, TagContainer } from './styles';

interface JobProps {
    item: IJob;
    setFilterKeywords: (keyword: string) => void;
}

export default function Job({ item, setFilterKeywords }: JobProps) {
    const keywords = [item.role, item.level, ...item.languages, ...item.tools];
    const feature = item.featured;

    return (
        <JobContainer className={feature ? 'featured' : ''}>
            <Logo src={item.logo} />
            <DescriptionContainer>
                <div className="company">
                    <span className="cname">{item.company}</span>
                    {item.new && <span className="new">new!</span>}
                    {item.featured && <span className="featured">featured</span>}
                </div>

                <div className="position">{item.position}</div>

                <div className="details">
                    <span>{item.postedAt}</span>
                    <span className="dot">&nbsp;•&nbsp;</span>
                    <span>{item.contract}</span>
                    <span className="dot">&nbsp;•&nbsp;</span>
                    <span>{item.location}</span>
                </div>
                <div className="separator"></div>
            </DescriptionContainer>
            <TagContainer>
                {keywords.map((key, id) => (
                    <span key={id} onClick={() => setFilterKeywords(key)}>
                        {key}
                    </span>
                ))}
            </TagContainer>
        </JobContainer>
    );
}
