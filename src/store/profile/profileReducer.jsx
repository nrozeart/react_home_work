import { CHANGE_NAME } from './actions';
import { initState } from './initState';

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
