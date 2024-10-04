import { myInfoList } from "../constants/constants"
import { OPEN_CARD, SET_DARKMODE, SET_LANG } from "./typeActions"

const initialStates = { 
  persoInfo : myInfoList,
  DarkMode : false,
  language : 'Fr',
  openCard : false
}

export const GeneralReducer = (state = initialStates, action) => {

  switch(action.type) {
    case OPEN_CARD:
      return {
        ...state, openCard: !state.openCard
      }

      case SET_LANG:
      return {
        ...state, language:action.payload
      }

      case SET_DARKMODE:
        return {
          ...state, 
          DarkMode: action.payload !== undefined ? action.payload : !state.DarkMode, 
        }
    default :
     return state 
  }
}