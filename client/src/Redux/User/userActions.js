import axios from 'axios';
import { UserActionTypes } from './userTypes'

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }

        try {
            const res = await axios.post(`http://localhost:8000/auth/users/me/`, config)
            dispatch({
                type: UserActionTypes.USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: UserActionTypes.USER_LOADED_FAIL
            })
        }
    }
    else {
        dispatch({
            type: UserActionTypes.USER_LOADED_FAIL
        })
    }
}
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post(`http://localhost:8000/auth/jwt/create/`, body, config)
        dispatch({
            type: UserActionTypes.LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: UserActionTypes.LOGIN_FAIL
        })
    }
}
