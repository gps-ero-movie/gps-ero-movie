<template>
<div id="app">
  <header-nav-bar
  v-resize="setNowInnerWidth"
  :tabsRender="isHeaderTabsRender"
  ></header-nav-bar>
  <laugh-page></laugh-page>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderNavBarComponent from './components/header-nav-bar/header-nav-bar';
import LaughPageComponent from './views/laugh-page/laugh-page';
import { LARGE_TABLET_SCREEN_WIDTH } from './consts/screen-size.const';

@Component({
  name: 'App',
  components: {
    'header-nav-bar': HeaderNavBarComponent,
    'laugh-page': LaughPageComponent,
  },
})
export default class App extends Vue {

  /** ヘッダータブの描画を司るフラグ */
  private isHeaderTabsRender = true;

  private marginTop!: string;

  constructor() {
    super();
  }

   /** ライフサイクルフック */
  private mounted() {
    this.setNowInnerWidth();
  }

  /**
   * window幅取得を取得し、タブレットサイズ以下の場合ヘッダータブを非表示にする
   */
  private setNowInnerWidth(): void {
    if (window.innerWidth < LARGE_TABLET_SCREEN_WIDTH) {
      this.isHeaderTabsRender = false;
      this.setMarginTop();
    } else {
      this.isHeaderTabsRender = true;
    }
  }

  private setMarginTop() {
    this.marginTop = 'margin-top:' + (window.innerHeight - 120) + 'px';
  }
}
</script>
<style lang="scss" src="./app-page.scss"></style>

