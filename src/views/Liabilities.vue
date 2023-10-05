<template>
  <v-app>
    <v-container>
      <v-row>
        <v-text-field label="Eigenheim-Hypothek" variant="solo" :model-value ="parseFloat(state.completeMortgage)" prefix="€" readonly/>
      </v-row>
      <v-row>
        <v-text-field label="BafäGDarlehen" v-model="state.bafoeg" type="number" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Autokredit" v-model="state.carCredit" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Kreditkartenschulden" v-model="state.creditCardPayment" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Bankdarlehen" v-model="state.bankPayment" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
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
