import { ProfileAction } from '../action/actions';

const initialState = {
    profiles: {
        isloading : undefined,
        records: [],
    }
}
const reducers = (state = initialState, action) => {
    switch(action.type) {
        case ProfileAction.GET_USERS_IN_PROGRESS: 
            return Object.assign({}, state, { profiles: Object.assign({}, state.profiles, { isloading: true }) })
        case ProfileAction.GET_USER_SUCESS:
            // return {
            //     ...state,
            //     ...{
            //         profiles: {
            //             isloading: false,
            //             records: action.data
            //         }
            //     }
            // }
            return Object.assign({}, state, { 
                profiles: { isloading: false, records: [...state.profiles.records, ...action.data]} 
            })
        default:
            return state;
    }
}

export default reducers;