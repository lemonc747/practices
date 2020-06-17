import {
  AllInclusive,
  CameraEnhance,
  PhotoLibrary,
  Event,
  EventAvailable,
} from '@material-ui/icons';
// import {} from ''
import CanvasBase from 'src/pages/canvas/canvas.base';
import CusteomEvent from 'src/pages/events/customEvent'

// enum Routes{
//   canvas = 'canvas',
//   react = 'react',
//   event = 'event',

// }

export interface RouteConfigProps {
  key: string,
  name: string,
  path: string,
  icon: typeof AllInclusive,
  component?: React.FC| React.ComponentClass, // @gya-todos: 这里应该如何定义一个组件的类型？
  routes?: Array<RouteConfigProps>,
}


/**
 * 嵌套路径：父节点的path作为是否展开节点的标识
 * 例如：父节点path=/canvas，那么子节点约定path=/canvas/*，然后/canvas作为menuBar组件中的openMenuGroup
 */
export const routesConfig: RouteConfigProps[] = [
  {
    key: 'home',
    name: '主页',
    path: '/',
    icon: AllInclusive,
    component: CusteomEvent, // @gya-todos: 后面再做主页
  },
  {
    key: 'canvas',
    name: '图层',
    icon: CameraEnhance,
    path: '/canvas', // 
    routes: [
      {
        key: 'canvas-base',
        name: '图层基本用法',
        path: '/canvas/base',
        icon: PhotoLibrary,
        component: CanvasBase,
      }
    ]
  },
  {
    key: 'event',
    name: '事件',
    icon: Event,
    path: '/event',
    routes: [
      {
        key: 'custom-event',
        name: '自定义事件',
        path: '/event/custom',
        icon: EventAvailable,
        component: CusteomEvent,
      }
    ]
  }
]

// export routes;
