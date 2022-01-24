/**
 * 防止重复生成多个对象出来
 */
let geolocation = null
// 获取自身定位
export function selfLocation(params) {
  if(!geolocation) {
    geolocation = new AMap.Geolocation({
      enableHighAccuracy: true,//是否使用高精度定位，默认:true
      timeout: 10000,          //超过10秒后停止定位，默认：5s
      position:'RB',    //定位按钮的停靠位置
      buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
      // markerOptions: {
      //   content: ' '
      // }
      showMarker: false,
      showButton: false
    })
  }
  
  params.map.addControl(geolocation)
  /**
   *   getCurrentPosition这个方法要有
   */
  geolocation.getCurrentPosition((status,result) => {
    if(status=='complete'){
        // onComplete(result)
      // console.log(result.position.lat)
      const lat = result.position.lat
      const lng = result.position.lng
      // this.currentLocation = [lng,lat]
      // console.log(this.currentLocation)
      // const currentCircle = {
      //   center: [lng,lat]
      // }
      // this.amapCircle[0].center = [lng, lat]

    }else{
        // onError(result)
    }
  })
  if(params.complete && typeof params.complete === 'function')
  AMap.event.addListener(geolocation, 'complete', params.complete);//返回定位信息 params.complete()
  // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
}
