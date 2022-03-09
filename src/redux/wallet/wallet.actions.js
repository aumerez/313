import { WalletActionTypes } from "./wallet.types";

export const setCurrentWallet = wallet => {
  return {
    type: WalletActionTypes.SET_CURRENT_WALLET,
    payload: wallet
  }
}
