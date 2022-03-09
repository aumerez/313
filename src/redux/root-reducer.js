import { combineReducers } from "redux";

import walletReducer from "./wallet/wallet.reducer";

export default combineReducers({
  wallet: walletReducer
});