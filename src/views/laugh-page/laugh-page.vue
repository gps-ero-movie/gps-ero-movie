<template>
<v-container fluid justify-space-around>
  <div class="makelaugh-container">
    <div class="title-container"><span>オススメ</span></div>
    <div class="item-container">
      <v-flex 
        v-for="themeItem in themeItems"
        :key="themeItem.id"
        :themeItem="themeItem"
        style="margin: 15px;">
        <theme-item
        :key="themeItem.id"
        :themeItem="themeItem"
        :footerMenuType="footerMenuType">
        </theme-item>
      </v-flex>
    </div>
  </div>
  <div class="laugh-container"></div>
  <div class="ranking-container"></div>
</v-container>
</template>
<!-- File Import -->
<script lang="ts" src="./laugh-page.ts"></script>
<style lang="scss" scoped src="./laugh-page.scss"></style>

