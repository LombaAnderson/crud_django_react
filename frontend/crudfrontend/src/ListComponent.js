import React from 'react';
import UserComponent from './UserComponent';


export default function ListComponent(){
    return (
  <div>
      <h2>Lista de usuários</h2>
    <ul>
        <UserComponent name={"Anderson Lomba"} />

    </ul>
</div>
    )
}