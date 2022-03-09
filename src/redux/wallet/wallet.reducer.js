import { WalletActionTypes } from "./wallet.types"

const INITIAL_STATE = {
  currentWallet: null
}

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WalletActionTypes.SET_CURRENT_WALLET:
      return {
        ...state,
        currentWallet: action.payload
      }
    default: 
      return state;
  }
}

export default walletReducer;