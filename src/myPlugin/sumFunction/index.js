import sumFunction from './sum-function'
// 为组件提供 install 安装方法，供按需引入
sumFunction.install = Vue => {
  Vue.component(sumFunction.name, sumFunction)
}
export default sumFunction