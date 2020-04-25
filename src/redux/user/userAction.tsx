import { userTypes } from './userActionTypes';


export const setCurrentUser = (user: any) => {
    return {
        type: userTypes.SET_CURRENT_USER,
        payload: user
    }
}

export const userSignOut = () => {
    return {
        type: userTypes.USER_SIGN_OUT
    }
}



