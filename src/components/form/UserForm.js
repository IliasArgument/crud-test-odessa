import React, { useState, useEffect } from 'react';
import Button from './Button';
import * as Toaster from '../toaster/Toaster';



const UserForm = props => {

    const { editing } = props;
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const validate = (user) => {
        let validated = true;
        if (!user.name) {
            Toaster.showErrorToast('Name entered incorrectly');
            validated = false;
        }
        if (!user.surname) {
            Toaster.showErrorToast('Surname entered incorrectly');
            validated = false;
        }
        if (!user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            Toaster.showErrorToast('Email entered incorrectly');
            validated = false;
        }
        if (!user.phone.match(/^\d[\d\(\)\ -]{4,14}\d$/) || !user.phone) {
            Toaster.showErrorToast('Phone entered incorrectly');
            validated = false;
        }
        if (!user.dataOfBirth) {
            Toaster.showErrorToast('birthday entered incorrectly');
            validated = false;
        }
        return validated;
    }

    const handleSubmit = (e, user) => {
        e.preventDefault()
        if (!validate(user)) return;
        if (editing) {
            props.updateUser(user.id, user)
            Toaster.showSuccessToast('data change successfully');
        } else {
            Toaster.showSuccessToast('data added successfully');
            props.addUser(user)
        }
    }

    return (
        <>
            {
                editing ?
                    (
                        <>
                            <div className='form-container'>
                                <form onSubmit={(e) => handleSubmit(e, user)} className='form'>
                                    <div className='form'>
                                        <input
                                            type="text" name="name" maxLength='60' placeholder="Name" className={`input`} value={user.name} onChange={handleInputChange}
                                        />
                                        <input
                                            type="text" name="surname" maxLength='60' placeholder="Surname" className={`input`} value={user.surname} onChange={handleInputChange}
                                        />
                                        <input
                                            type="text" name="email" maxLength='60' placeholder="Email" className={`input`} value={user.email} onChange={handleInputChange}
                                        />
                                        <input
                                            type="tel" name="phone" maxLength='60' placeholder="Phone" className={`input`} value={user.phone} onChange={handleInputChange}
                                        />
                                        <input
                                            type="date" name="dataOfBirth" maxLength='60' placeholder="Birthday" className={`input`} value={user.dataOfBirth} onChange={handleInputChange}
                                        />
                                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', padding: ' 0 15px' }}>
                                            <Button color='primary' title='Update user' type='submit' />
                                            <Button
                                                color='secondary'
                                                title='Cancel'
                                                onClick={() => props.onClearFunction(false)}
                                                className="button muted-button"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className='form-container'>
                                <form onSubmit={(e) => handleSubmit(e, user)} className='form'>
                                    <div className='form'>
                                        <input
                                            maxLength='60' type="text" name="name" placeholder="Name" className={`input`} value={user.name} onChange={handleInputChange}
                                        />
                                        <input
                                            maxLength='60' type="text" name="surname" placeholder="Surname" className={`input`} value={user.surname} onChange={handleInputChange}
                                        />
                                        <input
                                            maxLength='60' type="text" name="email" placeholder="Email" className={`input`} value={user.email} onChange={handleInputChange}
                                        />
                                        <input
                                            maxLength='60' type="tel" name="phone" placeholder="Phone" className={`input`} value={user.phone} onChange={handleInputChange}
                                        />
                                        <input
                                            maxLength='60' type="date" name="dataOfBirth" placeholder="Birth" className={`input`} value={user.dataOfBirth} onChange={handleInputChange}
                                        />
                                        <div style={{ marginTop: '20px' }}>
                                            <Button color='primary' title='Add user' type='submit' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
            }

        </>
    )
}

export default UserForm;