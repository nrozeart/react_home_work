import { ADD_CHAT } from './actions';
import { initState } from './initState';

export const chatsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            name: action.name,
          },
        ],
      };
    default:
      return state;
  }
};
