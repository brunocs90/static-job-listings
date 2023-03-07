import Job, { IJob } from '../Job';
import { JobsContainer } from './styles';

interface Jobs {
    data: IJob[];
}

export default function Jobs({ data }: Jobs) {
    return (
        <JobsContainer>
            <div>
                {data.map((item, index) => {
                    return (
                        <Job
                            key={index}
                            id={0}
                            company={item.company}
                            logo={item.logo}
                            new={item.new}
                            featured={item.featured}
                            position={item.position}
                            role={item.role}
                            level={item.level}
                            postedAt={item.postedAt}
                            contract={item.contract}
                            location={item.location}
                            languages={item.languages}
                            tools={item.tools}
                        ></Job>
                    );
                })}
            </div>
        </JobsContainer>
    );
}
