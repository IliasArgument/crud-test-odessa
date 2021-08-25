import React from 'react';
import Loading from '../Loading/Loading';
import Pagination from '../pagination/Pagination';
import Button from '../form/Button';




const UserTable = props => {
    const { users } = props;
    const handleDeleteUser = id => {
        let answer = window.confirm('Are you sure?')
        if (answer) {
            props.deleteUser(id)
        }
    }
    return (
        <>
            {users.length ?
                (
                    <>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>date of birthday</th>
                                    <th>create/update user date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users?.map(user => (
                                    <tr key={user.id}>
                                        <td className='td'>{user.name}</td>
                                        <td className='td'>{user.surname}</td>
                                        <td className='td'>{user.phone}</td>
                                        <td className='td'>{user.email}</td>
                                        <td className='td'><span>{user.dataOfBirth}</span></td>
                                        <td className='td'>{user.createUserData}</td>
                                        <td className='td' style={{ width: '100px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <Button onClick={() => props.editRow(user)} color='primary' title='Edit' />
                                                <Button onClick={() => handleDeleteUser(user.id)} color='secondary' title='Delete' />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination />
                    </>)
                : 
               <Loading />
            }
        </>
    )
}

export default UserTable;