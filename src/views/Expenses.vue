<template>
  <v-app>
    <v-container>
      <v-row>
        <v-text-field label="Steuern" v-model="state.tax" type="number" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="BAföG Darlehenszahlung" v-model="state.bafoeg" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Autokreditzahlung" v-model="state.carCredit" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Kreditkartenzahlung" v-model="state.creditCardPayment" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Sonstige Ausgaben" v-model="state.otherExpenses" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Ausgaben pro Kind:" v-model="state.ChildCost" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
        </v-col>
        <v-col>
          <v-text-field label="Anzahl" v-model="state.ChildAmount" type="number" :rules="[rules.number,rules.negative]"/>
        </v-col>
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
