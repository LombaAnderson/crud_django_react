import React from 'react';
import ListComponent from './ListComponent';
import UserList from './UserList';


export default class UserList extends React.Component(){
    state = { lists: null}

     async componentDiMount(){
        var url = 'http://127.0.0.1:8000/list';
        const response = await fetch(url);
        const data = await response.json();
     }

    render()
    {
    return (
  <div>
   <ListComponent listName = {'Lista de Usuários'}/>

</div>
    )
}
}