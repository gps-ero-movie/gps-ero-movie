import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem, ThemeItemFooterMenuType } from './theme-item.interface';
import { THEMEITEM_FOOTERMENU_TYPE } from '@/consts/theme-item.const';
/**
 * お題コンポーネント
 */
@Component
export default class ThemeItemComponent extends Vue {

  /** お題コレクション */
  @Prop() private themeItem!: ThemeItem;

  @Prop({default: THEMEITEM_FOOTERMENU_TYPE.makeLaugh}) private footerMenuType!: ThemeItemFooterMenuType;

  constructor() {
    super();
  }
}
