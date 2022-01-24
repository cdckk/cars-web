let walking = null
// 规划不行路线
export function Walking(params) {
  if (!walking) {
    walking = new AMap.Walking({
      map: params.map,
      hideMarkers: true
      // panel: "panel"
    })
  }
  //根据起终点坐标规划步行路线
  walking.search(params.positionStart, params.positionEnd, (status, result) => {
    // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
    if (status === 'complete') {
        // log.success('绘制步行路线完成')
        console.log('绘制步行路线完成')
        // console.log(result)
        // 回调方法出去
        if (params.complete && typeof params.complete === 'function') {
          params.complete(result)
        }
    } else {
        // log.error('步行路线数据查询失败' + result)
        console.log('步行路线数据查询失败',result)
    }   
  })
}