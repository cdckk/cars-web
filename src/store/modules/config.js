const state = {
  parkingStatus: [
    {
      value: true,
      label: '启用'
    },
    {
      value: false,
      label: '禁用'
    }
  ],
  parkingType: [
    {
      label: '室内',
      value: 1
    },
    {
      label: '室外',
      value: 2
    }
  ],
  // 关键字搜索
  keyword: [
    {
      label: '停车场名称',
      value: 'parkingName'
    },
    {
      label: '详细区域',
      value: 'address'
    }
  ],
  brandStatus: [
    {
      label: '启用',
      value: true
    },
    {
      label: '禁用',
      value: false
    }
  ],
  // 禁启用统一
  radioDisable: [
    { label: '启用', value: true },
    { label: '禁用', value: false }
  ],
  // 档位统一
  radioGear: [
    { label: '手动挡', value: 1 },
    { label: '自动挡', value: 2 },
    { label: '人工智能', value: 3 },
  ],
  // 能源类型统一
  radioEnergyType: [
    { label: '电动', value: 1 },
    { label: '油', value: 2 },
    { label: '混合动力', value: 3 }
  ],
  // 年检统一
  radioYearCheck: [
    { label: '已年检', value: true },
    { label: '未年检', value: false }
  ]
}
const mutations =  {
  
}
const actions = {
   
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}