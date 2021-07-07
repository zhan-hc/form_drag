const comtemp = {
  'none': {
    component: 'testNone'
  },
  'input': {
    component: 'testInput', // 组件名称，需要提前注册到 Vue
    label: '单行文本', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'el-icon-edit', // 左侧组件列表中显示的名字
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
    component: 'testTextarea', // 组件名称，需要提前注册到 Vue
    label: '多行文本', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'el-icon-edit', // 左侧组件列表中显示的名字
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
  'select': {
    component: 'testSelect', // 组件名称，需要提前注册到 Vue
    label: '单项选择', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'el-icon-edit', // 左侧组件列表中显示的名字
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
    component: 'testCheckbox', // 组件名称，需要提前注册到 Vue
    label: '多项选择', // 左侧组件列表中显示的名字
    propValue: '', // 组件所使用的值
    icon: 'el-icon-edit', // 左侧组件列表中显示的名字
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
  }
}

export {
  comtemp
}
