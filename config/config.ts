import { menus } from './hooks';

export default {
  publicPath: '/react-hooks-huatree/',
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: '前端守夜人',
  favicon: '/react-hooks-huatree/favicon.png',
  logo: '/react-hooks-huatree/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    hooksHuatree: `${process.cwd()}/packages/hooks/src/index.ts`,
    'hooks-huatree': `${process.cwd()}/packages/hooks/src/index.ts`,
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/huatree/react-hooks-huatree' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
