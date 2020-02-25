import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Form = () => {
  const user = useContext(UserContext);

  return (
    <div className="user-form">

            {}
       <div className="input-item">
        <label className="label">Nom</label>
        <input
          className="input"
          onChange={e => user.setName(e.target.value)}
        />
      </div>

      {}
      <div className="input-item">
        <label className="label">Prenom</label>
        <input
          className="input"
          onChange={e => user.setLastName(e.target.value)}
        />
        </div>
    </div>
  );
};

export default Form;