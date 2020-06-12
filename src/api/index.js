import { getData, postData } from './http'

export function reqHomeHot1() {
  return getData('/api/homehot1')
}

export function reqHomeHot2() {
  return getData('/api/homehot2')
}