<template>
  <v-app>
    <v-container>
      <v-row>
          <v-text-field label="Gehalt" v-model="state.income" type="number" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
      </v-row>
      <v-row>
          <v-text-field label="Zinsen/Dividenden" v-model="state.interest" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      state: this.gamestate,
      rules: this.rules,
    };
  },
};
</script>

