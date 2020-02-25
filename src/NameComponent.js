import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Name = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 className="is-size-4">
        {user.kind} {user.name} {user.lastName}
      </h2>
    </div>
  );
};

export default Name;