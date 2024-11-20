'use client'

import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
}

interface Data {
    users: User[]
}

type DataDef = Data | null;

const useQuery = (USERS_QUERY: string) : { data: DataDef; loading: boolean; error: Error | null; }  =>{

    const [data, setData] = useState<DataDef>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users: User[]= [
                    { id: 1, name: 'John Doe' },
                    { id: 2, name: 'Jane Doe' },
                ]
                const data = { users };                
                setData(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [USERS_QUERY]);

    return { data, loading, error };
}


export default useQuery;