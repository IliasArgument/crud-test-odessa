import {
    GET_USERS_DATA,
    ADD_USER_DATA,
    REMOVE_USER_DATA,
    UPDATE_USER_DATA,
    SET_LOADING,
    SET_ERROR,
    SET_CURRENT_PAGE
} from "./constants";
import { httpGet, httpPost, httpPut, httpDelete } from '../utils/http-client';


export const getUsersData = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(false))
        const response = await httpGet(`https://611d49a27d273a0017e2f785.mockapi.io/api/fake/api`);
        if (response?.data) {
            dispatch(usersData(response.data))
        }
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(true))
    }
};
export const addUsersData = (obj) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(false))
        const response = await httpPost(`https://611d49a27d273a0017e2f785.mockapi.io/api/fake/api`, obj);
        if (response) (dispatch(postUserData(obj)))
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(true))
        console.log('errrrooorr')
    }
};

export const deleteUsersData = (id) => async (dispatch, getState) => {
    const { data } = getState();
    const users = data.filter(user => user.id !== id)
    try {
        dispatch(setLoading(true));
        dispatch(setError(false))
        const response = await httpDelete(`https://611d49a27d273a0017e2f785.mockapi.io/api/fake/api/${id}`);
        if (response) (dispatch(usersData(users)))
        return response;
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(true))
        console.log('errrrooorr')
    }
};

export const putUsersData = (id, updatedUser) => async (dispatch, getState) => {
    console.log(updatedUser, 'action updatedUser')
    const { data } = getState();

    const update = data.map(user => (user.id === id ? updatedUser : user));

    try {
        dispatch(setLoading(true));
        dispatch(setError(false))
        const response = await httpPut(`https://611d49a27d273a0017e2f785.mockapi.io/api/fake/api/${id}`, updatedUser);
        if (response) dispatch(putUserData(update))
        return response;
    } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(true))
        console.log('errrrooorr')
    }
};

export const setLoading = (load) => ({
    type: SET_LOADING,
    payload: load,
});

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

export const usersData = (users) => ({
    type: GET_USERS_DATA,
    payload: users,
});

export const postUserData = (user) => ({
    type: ADD_USER_DATA,
    payload: user,
})

export const deleteUser = (id) => ({
    type: REMOVE_USER_DATA,
    payload: id,
})

export const putUserData = (user) => ({
    type: UPDATE_USER_DATA,
    payload: user,
})

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
})