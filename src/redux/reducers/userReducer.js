import * as actionType from "../constants/actionsTypes";

const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return { ...state };
    case actionType.CONNECT:
      return {
        ...state,
        address: payload.address,
        balance: payload.balance,
        isConnected: true,
      };

    case actionType.UPDATE_CONNECTION:
      if (payload) {
        return {
          ...state,
          address: payload.address,
          balance: payload.balance,
          isConnected: true,
        };
      } else {
        return { ...state };
      }
    case actionType.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case actionType.DISCONNECT:
      return {
        ...state,
        isConnected: false,
      };
  }
};

export default UserReducer;
