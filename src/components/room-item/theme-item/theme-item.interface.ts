/**
 * お題情報の型定義
 */
export interface ThemeItem {
  /** お題ID(リレーションキー） */
  id?: number;

  /** お題の画像 */
  imageUrl?: string;

  /** お題の一言 */
  firstComment?: string;
}


export interface ThemeItemFooterMenuType {
  /** 笑わすページ用フッターメニュー */
  makeLaugh: '0';

  /** 笑うページ用フッターメニュー */
  laugh: '1';

  /** ランキングページ用フッターメニュー */
  ranking: '2';

  /** カスタム */
  custom: '3';
}
