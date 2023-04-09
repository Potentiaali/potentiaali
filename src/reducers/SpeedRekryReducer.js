import axios from "axios"
import config from "../data/config.json"

const initialState = {
  SpeedRekryItems: []
}

const SpeedRekryTypes = {
  SET_SPEED_REKRY: "SET_SPEED_REKRY"
}

const rekryFilter = (rekryItem) => ({
  ...rekryItem,
  open: rekryItem.open === "TRUE" ? true : false,
  full: rekryItem.full === "TRUE" ? true : false
})

export const setSpeedRekry = (speedRekries) => {
  return {
    type: SpeedRekryTypes.SET_SPEED_REKRY,
    speedRekries
  }
}

export const fetchSpeedRekry = () => {
  return async (dispatch) => {
    try {
      const rekries = await axios.get(config.speedRekryApi)
      const filteredData = rekries.data.map(rekryFilter)
      dispatch(setSpeedRekry([...filteredData]))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("error", e)
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SpeedRekryTypes.SET_SPEED_REKRY:
      return {
        ...state,
        SpeedRekryItems: action.speedRekries
      }
    default:
      return state
  }
}
