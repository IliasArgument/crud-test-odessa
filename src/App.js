import React, { useEffect, useState } from 'react';
import UserForm from './components/form/UserForm';
import UserTable from './components/tables/UserTable';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersData, addUsersData, deleteUsersData, putUsersData } from './store/actions';
import Error from './components/Error/Error';
import { createDate } from './utils/date';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const { data, error, page, per_page } = useSelector(state => state);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', surname: '', email: '', phone: '', dataOfBirth: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const onClearFunction = (bool) => {
    setEditing(bool);
    setCurrentUser(initialFormState);
  }

  const addUser = user => {
    user.id = Math.floor(Math.random() * 1000)
    user.createUserData = createDate(user)
    setUsers([...users, user]);
    dispatch(addUsersData(user))
    setCurrentUser(initialFormState)
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id));
    dispatch(deleteUsersData(id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    updatedUser.createUserData = createDate(updatedUser)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    dispatch(putUsersData(id, updatedUser))
    setCurrentUser(initialFormState)
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      dataOfBirth: user.dataOfBirth
    });
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    dispatch(getUsersData())
    setUsers(data)
  }, [])

  const indexOfLastPost = page * per_page;
  const indexOfFirstPost = indexOfLastPost - per_page;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  if (error) {
    return <Error />
  }
  return (
    <div className="container">
      <ToastContainer className="toast-container" />
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <UserForm
            setCurrentUser={setCurrentUser}
            onClearFunction={onClearFunction}
            editing={editing}
            currentUser={currentUser}
            updateUser={updateUser}
            addUser={addUser}
          />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={currentPosts}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  )
}

export default App;