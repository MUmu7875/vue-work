import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/js/flexible';
import elDragDialog from './dialog'
import "../api/staffDate"
import axios from 'axios'
import VueAxios from "vue-axios";



Vue.directive('el-drag-dialog', elDragDialog);//添加标签事件绑定 可以放大移动弹窗
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
//弹窗默认点击遮罩改为不关闭 为了防止和拖拽冲突 ，这句需要放在use ElementUI之前（也可以不加这句，自己测试区别）
ElementUI.Dialog.props.closeOnClickModal.default = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
