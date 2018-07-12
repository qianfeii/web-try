import Vue from 'vue'
import Router from 'vue-router'
const ArrayLoopTest = () => import('@/components/ArrayLoopTest')
const ShowJson = () => import('@/components/ShowJson')
const CanvasIndex = () => import('@/components/canvasTry/index')
const CanvasMDN = () => import('@/components/canvasTry/MDN-learning')
const CanvasW3C = () => import('@/components/canvasTry/w3c-learning')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/showJson',
      name: 'ShowJson',
      component: ShowJson,
      isFolder: true,
      label: 'JSON页面排版'
    },
    {
      path: '/ArrayLoopTest',
      name: 'ArrayLoopTest',
      component: ArrayLoopTest,
      isFolder: true,
      label: '数组循环测试'
    },
    {
      path: '/CanvasIndex',
      name: 'CanvasIndex',
      component: CanvasIndex,
      isFolder: true,
      label: 'canvas 尝试',
      redirect: '/canvas/MDNcanvse',
      children: [
        {
          path: '/canvas/MDNcanvse',
          name: 'MDNcanvse',
          component: CanvasMDN,
          label: 'MDN教程'
        },
        {
          path: '/canvas/W3Ccanvse',
          name: 'W3Ccanvse',
          component: CanvasW3C,
          label: 'W3C教程'
        }
      ]
    }
  ]
})
