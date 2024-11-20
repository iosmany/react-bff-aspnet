
import React, { Suspense } from 'react';
import UserList from './components/userList';
import Loading from './loading';

const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
      <Suspense fallback={<Loading />}>
          <UserList   />
      </Suspense>
    </div>
  );
}

export default UserPage;