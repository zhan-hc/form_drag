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
    component: 'formTextarea',
    label: '多行文本',
    propValue: 'icon-duohangwenben',
    icon: '',
    height: 100,
    placeholder: '请输入多行文本内容',
    animations: [],
    events: {},
    style: {
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
    component: 'formRadio',
    label: '单项选择',
    propValue: '',
    icon: 'icon-danxiangxuanze',
    height: 114,
    animations: [],
    events: {},
    choices: [
      {
        _id: 1001,
        value: '选项',
        selected: false
      },
      {
        _id: 1002,
        value: '选项',
        selected: false
      },
      {
        _id: 1003,
        value: '选项',
        selected: false
      }
    ],
    style: {
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
    component: 'formCheckbox',
    label: '多项选择',
    propValue: '',
    icon: 'icon-duoxiangxuanze',
    height: 114,
    choices: [
      {
        _id: 1001,
        value: '选项',
        selected: false
      },
      {
        _id: 1002,
        value: '选项',
        selected: false
      },
      {
        _id: 1003,
        value: '选项',
        selected: false
      }
    ],
    animations: [],
    events: {},
    style: {
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
    component: 'formSelect',
    label: '下拉框',
    propValue: '',
    icon: 'icon-xialakuang1',
    height: 50,
    placeholder: '请选择',
    animations: [],
    events: {},
    style: {
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
    type: 'input',
    label: '单行文本',
    icon: 'icon-mobanzhizuo_danhangwenben'
  },
  {
    id: 1002,
    type: 'textArea',
    label: '多行文本',
    icon: 'icon-duohangwenben'
  },
  {
    id: 1003,
    type: 'radio',
    label: '单项选择',
    icon: 'icon-danxiangxuanze'
  },
  {
    id: 1004,
    type: 'checkbox',
    label: '多项选择',
    icon: 'icon-duoxiangxuanze'
  },
  {
    id: 1005,
    type: 'select',
    label: '下拉框',
    icon: 'icon-xialakuang1'
  }
]
export {
  comtemp,
  comtempList
}
