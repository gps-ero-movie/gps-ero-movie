import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavBarMenu } from './nav-bar-menu.interface';
import { DEFAULT_NAV_BAR_MENU } from '@/consts/default-header-menu.const';
import FooterNavBarComponent from '@/components/header-nav-bar/footer-nav-bar/footer-nav-bar.vue';


/**
 * ヘッダーナビゲーションバーコンポーネント
 */
@Component({})
export default class HeaderNavBarComponent extends Vue {

  /** タイトル */
  @Prop({default: 'title'}) private title!: string;

  /** タブメニュー表示切り替え用 */
  @Prop({default: true}) private tabsRender!: boolean;

  /** ヘッダーに表示するメニュー */
  @Prop(
    {
      type: Array,
      default: () => DEFAULT_NAV_BAR_MENU,
    },
  ) private headerMenuList!: NavBarMenu[];

  constructor() {
    super();
  }
}
