import { Component, Vue } from 'vue-property-decorator';
import { ThemeItem } from '@/components/room-item/theme-item/theme-item.interface';
import { THEMEITEM_FOOTERMENU_TYPE } from '@/consts/theme-item.const';
import ThemeItemComponent from '@/components/room-item/theme-item/theme-item.vue';
import axios from 'axios';

/**
 * 「笑う」ページ
 */
@Component({
  // 使用するコンポーネント一覧
  components: {
    // お題コンポーネント
    'theme-item': ThemeItemComponent,
  },
})
export default class LaughPageComponent extends Vue {
  /** お題コレクション */
  private themeItems: ThemeItem[] = [];

  private footerMenuType = THEMEITEM_FOOTERMENU_TYPE.makeLaugh;

  constructor() {
    super();
  }

  /**
   * @override
   * ライフサイクルフック
   * インスタンス生成時に、お題リストを取得＆更新する
   */
  private mounted() {
    axios
      .get<ThemeItem[]>('http://www.mocky.io/v2/5c5713f64d000041100fd01c')
      .then((response) => {
        // 取得したお題をお題コレクションに格納
        this.themeItems = response.data || [];
      });
  }
}
