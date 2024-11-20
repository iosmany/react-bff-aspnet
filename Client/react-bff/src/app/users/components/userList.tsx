'use client'

import useQuery from "../hooks/useQuery";

const UserList = () => {

    const { data, loading, error } = useQuery('');
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <>
            <ul>
                {data != null && data.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export default UserList;

