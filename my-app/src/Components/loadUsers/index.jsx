import React from 'react';
import {useLoadUsers} from '../../hooks'
import  loadTestUsers  from '../../settings/api'
import loadRandomUsers from '../../settings/api'



function LoadUsers(props) {
  const loadUsersFetch = undefined;
    const {data, isFetching, isError} = useLoadUsers(loadUsersFetch);
    console.log('component data',data);
    return (
      <>
          <h2>Load users component</h2>
          {isError && <p>Error load users</p>}
          {isFetching && <p>Loading...</p>}
          <ul>
              {data.map(u => ( <li key={u.id}>user {u.id}: {u.fullName}</li>))}
          </ul>
      </>
    )
  }
  
  export default LoadUsers;