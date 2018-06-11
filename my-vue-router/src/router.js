import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import ListPage from '@/views/ListPage'
import UpdatePage from '@/views/UpdatePage'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: ListPage
    },
    {
      path: '/update',
      component: UpdatePage
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router