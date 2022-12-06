import { SHOW_NAME } from './actions';
import { initState } from './initState';

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {
                ...state,
                showName: !state.showName,
            };
        default:
            return state;
    }
};
