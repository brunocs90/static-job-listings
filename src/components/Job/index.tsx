import { JobContainer, Logo } from './styles';

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
    return (
        <JobContainer>
            <Logo src={item.logo} />
        </JobContainer>
    );
}
