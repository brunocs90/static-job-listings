import { IJob } from '../Interfaces';
import Job from '../Job';
import { JobsContainer } from './styles';

interface JobsProps {
    data: IJob[];
    setFilterKeywords: (keyword: string) => void;
}

export default function Jobs({ data, setFilterKeywords }: JobsProps) {
    return (
        <JobsContainer>
            <div>
                {data.map((item, index) => {
                    return <Job key={index} item={item} setFilterKeywords={setFilterKeywords}></Job>;
                })}
            </div>
        </JobsContainer>
    );
}
