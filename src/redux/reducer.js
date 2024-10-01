import { myInfoList } from "../constants/constants"
import { SET_DARKMODE, SET_LANG } from "./typeActions"

const initialStates = { 
  persoInfo : myInfoList,
  DarkMode : false,
  language : 'Fr'
}

export const GeneralReducer = (state = initialStates, action) => {

  switch(action.type) {
    // case SET_MYINFO:
    //   return {
    //     ...state, persoInfo:action.payload
    //   }

      case SET_LANG:
      return {
        ...state, language:action.payload
      }

      case SET_DARKMODE:
        return {
          ...state, DarkMode: !state.DarkMode
        }
    default :
     return state 
  }
}