import Vue from 'vue';
import Router from 'vue-router';
import LaughPageComponent from '@/views/laugh-page/laugh-page.vue';
import ChatRoomPageComponent from '@/views/chatroom-page/chatroom-page.vue';
import RankingPageComponent from '@/views/ranking-page/ranking-page.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/laugh',
      name: 'laugh',
      component: LaughPageComponent,
    },
  ],
});
router.replace({ path: '/makelaugh', name: 'makelaugh' });
// exportしないと読めないぞ
export default router;
