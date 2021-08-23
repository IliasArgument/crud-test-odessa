import {
    GET_USERS_DATA,
    ADD_USER_DATA,
    REMOVE_USER_DATA,
    UPDATE_USER_DATA,
    SET_ERROR,
    SET_LOADING,
    SET_CURRENT_PAGE
} from './constants';

const defaultState = {
    data: [],
    loading: false,
    error: false,
    page: 1,
    per_page: 10,
};



const gallery = (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS_DATA:
            return { ...state, data: payload };
        case SET_ERROR:
            return { ...state, error: payload };
        case SET_LOADING:
            return { ...state, loading: payload };
        case ADD_USER_DATA:
            const newUser = [...state.data, payload]
            return { ...state, data: newUser };
        case REMOVE_USER_DATA:
            return { ...state, data: payload };
        case UPDATE_USER_DATA:
            return { ...state, data: payload };
        case SET_CURRENT_PAGE:
            return { ...state, page: payload };
        default:
            return state;
    }
}
export default gallery