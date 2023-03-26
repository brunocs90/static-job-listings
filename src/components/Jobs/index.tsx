import { useEffect, useState } from 'react';
import { IJob } from '../Interfaces';
import Job from '../Job';
import { JobsContainer } from './styles';

interface JobsProps {
    data: IJob[];
    keywords: string[];
    setFilterKeywords: (keyword: string) => void;
}

export default function Jobs({ data, keywords, setFilterKeywords }: JobsProps) {
    const [newDataFiltered, setNewDataFiltered] = useState<IJob[]>(data);

    function dataFiltered() {
        const newData = data.filter(d => {
            return keywords.every(key => {
                return d.role === key || d.level === key || d.languages.includes(key) || d.tools.includes(key);
            });
        });
        setNewDataFiltered(newData);
    }

    useEffect(() => {
        dataFiltered();
    }, [keywords]);

    return (
        <JobsContainer>
            <div>
                {newDataFiltered.map((item, index) => {
                    return <Job key={index} item={item} setFilterKeywords={setFilterKeywords}></Job>;
                })}
            </div>
        </JobsContainer>
    );
}
