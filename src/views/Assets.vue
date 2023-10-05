<template>
  <v-app>
    <v-container>
      <v-row>
        <v-text-field label="Ersparnisse" v-model="state.savings" type="number" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Edelmetalle etc." v-model="state.metal" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>

      <StockList />
      <PropertyList />

    </v-container>
  </v-app>
</template>

<script>
import StockList from "@/components/StockList.vue";
import PropertyList from "@/components/PropertyList.vue";

export default {
  components: {PropertyList, StockList},
  data() {
    return {
      state: this.gamestate,
      rules: this.rules,
    };
  },
};
</script>
