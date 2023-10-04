<template>
  <v-card>
    <div class="fixed-tabs-container">
      <v-tabs v-model="selectedTab" bg-color="primary" align-tabs="center" centered stacked>
        <v-tab v-for="(item,index) in menuItems" :key="index" :prepend-icon="item.icon" :text="item.title"/>
      </v-tabs>
    </div>

    <div class="scrollable-container">
      <v-window v-model="selectedTab" class="fill-window ">
        <v-window-item v-for="item in menuItems">
          <component :is="item.Content"/>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
<script>
import {shallowRef} from "vue";
import Dashboard from "@/views/Dashboard.vue";
import Income from "@/views/Income.vue";
import Expenses from "@/views/Expenses.vue";
import Assets from "@/views/Assets.vue";
import Liabilities from "@/views/Liabilities.vue";

export default {
  data() {
    return {
      selectedTab : null,
      menuItems: [
        { icon: 'mdi-view-dashboard', title: 'Dashboard',Content: shallowRef(Dashboard) },
        { icon: 'mdi-cash-plus', title: 'Income',Content: shallowRef(Income) },
        { icon: 'mdi-cash-minus', title: 'Expenses',Content: shallowRef(Expenses) },
        { icon: 'mdi-home-city', title: 'Assets',Content: shallowRef(Assets) },
        { icon: 'mdi-cash-sync', title: 'Liabilities',Content: shallowRef(Liabilities) },
      ]
    };
  }
};
</script>
