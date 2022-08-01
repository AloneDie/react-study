interface RouteItem {
  path: string;
  id: string;
  title?: string;
  component: () => Promise<{
    default: React.ComponentType<any>;
  }>;
}

const RouteConfig: Array<RouteItem> = [
  {
    path: '/about',
    id: 'about',
    title: '关于',
    component: () => import('./About/index'),
  },
  {
    path: '/ref',
    id: 'ref',
    title: 'ref',
    component: () => import('./RefTest/index'),
  },
  {
    path: '/context',
    id: 'context',
    title: 'context',
    component: () => import('./ContextTest/index'),
  },
  {
    path: '/',
    id: 'home',
    title: '首页',
    component: () => import('./App'),
  },
];

export { RouteConfig };
