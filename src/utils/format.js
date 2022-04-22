// // 格式化能源类型
// export function formatEnergyType(carsAttrItem) {
//   const energyType = carsAttrItem.basics.energyType
//   return energyType
// }
// // 格式化座位数
// export function formatSeatNumber(carsAttrItem) {
//   const seatNumber = carsAttrItem.carsBody.seatNumber
//   return seatNumber
// }
// 格式化车辆属性
export function formatCarsAttr(val) {
  if (!val) { return '' }
  return JSON.parse(val)
  // return carsAttrItem
}
// 获取车辆属性key
export function getCarsAttrKey(params) {
  const carsAttrItem = formatCarsAttr(params.data)
  if (carsAttrItem[params.parentKey] && carsAttrItem[params.parentKey][params.childKey]) {
    return carsAttrItem[params.parentKey][params.childKey]
    // return val
  }
  return ''
}