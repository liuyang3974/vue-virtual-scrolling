// components/index.ts
import { App, Directive } from "vue";
import vueVirtualScrolling from "./vue-virtual-scrolling/index.vue";
const components = [vueVirtualScrolling];
const install: any = function (app: App) {
  // 防止已经注册过的组件重复注册
  if (install.installed) return;
  install.installed = true;
  components.forEach((res) => {
    app.component(res.name, res);
  });
};
// 导出一个install的函数或者一个对象里面有一个install的方法
export default {
  install,
};
