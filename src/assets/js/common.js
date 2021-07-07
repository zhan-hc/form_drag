const comtemp = {
  'none': {
    component: 'formNone'
  },
  'input': {
    component: 'formInput', // 组件名称，需要提前注册到 Vue
    label: '单行文本', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'icon-mobanzhizuo_danhangwenben', // 左侧组件列表中显示的名字
    animations: [], // 动画列表
    height: 50,
    placeholder: '请输入文本内容',
    events: {}, // 事件列表
    style: { // 组件样式
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: ''
    }
  },
  'textArea': {
    component: 'formTextarea', // 组件名称，需要提前注册到 Vue
    label: '多行文本', // 左侧组件列表中显示的名字
    propValue: 'icon-duohangwenben', // 组件所使用的值
    icon: '', // 左侧组件列表中显示的名字
    height: 100,
    placeholder: '请输入多行文本内容',
    animations: [], // 动画列表
    events: {}, // 事件列表
    style: { // 组件样式
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: ''
    }
  },
  'radio': {
    component: 'formRadio', // 组件名称，需要提前注册到 Vue
    label: '单项选择', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'icon-danxiangxuanze', // 左侧组件列表中显示的名字
    height: 50,
    placeholder: '请选择',
    animations: [], // 动画列表
    events: {}, // 事件列表
    style: { // 组件样式
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: ''
    }
  },
  'checkbox': {
    component: 'formCheckbox', // 组件名称，需要提前注册到 Vue
    label: '多项选择', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'icon-duoxiangxuanze', // 左侧组件列表中显示的名字
    height: 50,
    // placeholder: '请选择',
    animations: [], // 动画列表
    events: {}, // 事件列表
    style: { // 组件样式
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: ''
    }
  },
  'select': {
    component: 'formSelect', // 组件名称，需要提前注册到 Vue
    label: '下拉框', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'icon-xialakuang1', // 左侧组件列表中显示的名字
    height: 50,
    placeholder: '请选择',
    animations: [], // 动画列表
    events: {}, // 事件列表
    style: { // 组件样式
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: ''
    }
  }
}
const comtempList = [
  {
    id: 1001,
    label: '单行文本',
    icon: 'icon-mobanzhizuo_danhangwenben'
  },
  {
    id: 1002,
    label: '多行文本',
    icon: 'icon-duohangwenben'
  },
  {
    id: 1003,
    label: '单项选择',
    icon: 'icon-danxiangxuanze'
  },
  {
    id: 1004,
    label: '多项选择',
    icon: 'icon-duoxiangxuanze'
  },
  {
    id: 1005,
    label: '下拉框',
    icon: 'icon-xialakuang1'
  }
]
export {
  comtemp,
  comtempList
}
