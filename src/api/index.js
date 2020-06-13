import { getData, postData } from './http'

export function reqHomeHot1(city) {
  return getData(`/api/homehot1?city=${city}`)
}

export function reqHomeHot2(city) {
  return getData(`/api/homehot2?city=${city}`)
}