import React from 'react'

function User({id, firstName, lastName, email, gender, ipAddress}) {
  return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{ipAddress}</td>
        </tr>
  )
}

export default User