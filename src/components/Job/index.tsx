import { DescriptionContainer, JobContainer, Logo, TagContainer } from './styles';

export interface IJob {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

export default function Job(item: IJob) {
    let keywords = [item.role, item.level, ...item.languages, ...item.tools];
    console.log(keywords);
    return (
        <JobContainer>
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
            </DescriptionContainer>
            <TagContainer>
                {keywords.map((key, id) => (
                    <span key={id}>{key}</span>
                ))}
            </TagContainer>
        </JobContainer>
    );
}
