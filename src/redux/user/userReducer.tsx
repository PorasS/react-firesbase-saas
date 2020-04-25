import { userTypes } from './userActionTypes';


const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypes.USER_SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }

}

export default userReducer;