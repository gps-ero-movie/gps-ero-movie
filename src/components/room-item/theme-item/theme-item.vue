<template>
  <v-hover>
    <router-link 
    :to="{name: 'chatroom', params: {themeId: themeItem.id}}"
    slot-scope="{hover}" 
    :class="`elevation-${hover ? 12 : 2}`">
      <v-card class="theme-card-width">
        <v-img class="theme-img-height"
        :src="themeItem.imageUrl"
        >
        </v-img>
        <v-card-title 
        primary-title
        v-if="footerMenuType === '0'">
          <div style="display: flex; width: 100%;">
            <p class="headline mb-0" style="padding-top: 10px;">{{themeItem && themeItem.firstComment}}</p>
            <v-spacer></v-spacer>
            <v-card-actions>  
              <v-btn color="orange">ネタ作りにいく</v-btn>
            </v-card-actions>
          </div>
        </v-card-title>
      </v-card>
    </router-link>
  </v-hover>
</template>
<!--file import-->
<style lang="scss" scoped src="./theme-item.scss"></style>
<script lang="ts" scoped src="./theme-item.ts"></script>


