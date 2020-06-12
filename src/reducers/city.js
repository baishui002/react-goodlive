import * as cityAction from '../constants/city'

const initialState = {}

const city = (state = initialState, action) => {
  switch (action.type) {
    case cityAction.INIT_CITY:
      return state = action.data
    case cityAction.UPDATE_CITY:
      return state = action.data
    default:
      return state
  }
}

export default city