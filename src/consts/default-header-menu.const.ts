import { NavBarMenu } from '@/components/header-nav-bar/nav-bar-menu.interface';

/**
 * デフォルトのナビゲーションメニュー定義
 */
export const DEFAULT_NAV_BAR_MENU: NavBarMenu[] = [
  {
    menuTitle: '笑わす',
    path: '/makelaugh',
    icon: 'star',
  },
  {
    menuTitle: '笑う',
    path: '/laugh',
    icon: 'sentiment_very_satisfied',
  },
  {
    menuTitle: 'ランキング',
    path: '/ranking',
    icon: 'favorite',
  },
];
