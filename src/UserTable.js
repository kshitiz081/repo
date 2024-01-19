import React from 'react'
import User from './User';
function UserTable({ users, filterText}) {
    const rows = [];
    users.forEach((user) => {
        if(user.first_name.toLowerCase().indexOf(filterText.toLowerCase()) == -1){
            return;
        }
        rows.push(<User id={user.id} firstName={user.first_name} lastName={user.last_name} email={user.email} gender={user.gender} ipAddress={user.ip_address}/>)
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Gender</th>
                    <th>IP Address</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default UserTable