import * as cityAction from '../constants/city'

export function initCity(data) {
  console.log(9, data)
  return {
    data,
    type: cityAction.INIT_CITY
  }
}

export function updataCity(data) {
  return {
    data,
    type: cityAction.UPDATE_CITY
  }
}

