<template>
  <v-row>
    <h1>Immobilien/Unternehmen</h1>
  </v-row>
  <v-row>
    <v-list width="100%">
      <v-list-item v-for="(property, index) in state.immobileAndCompanies" :key="index" :value="property">
        <v-list-item-title>{{ propertyToString(property) }}</v-list-item-title>
        <template v-slot:append>
          <v-btn
            color="error"
            icon="mdi-close"
            variant="text"
            @click="removeProperty"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-row>
  <v-row>
    <v-dialog v-model="dialog" max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn @click="dialog = !dialog" color="grey-lighten-3" block>Hinzufügen</v-btn>
      </template>
      <v-card>
        <v-card-title>Neue Immobilie/Unternehmen</v-card-title>
        <v-card-text>
          <v-text-field label="Name" v-model="newPropertyName" :rules="[rules.required]"/>
          <v-text-field label="Cashflow" type="number" v-model="newPropertyCashflow" prefix="€"
                        :rules="[rules.required,rules.number,rules.negative]"/>
          <v-text-field label="Anzahlung" type="number" v-model="newPropertyDeposit" prefix="€"
                        :rules="[rules.required,rules.number,rules.negative]"/>
          <v-text-field label="Kosten" type="number" v-model="newPropertyCost" prefix="€"
                        :rules="[rules.required,rules.number,rules.negative]"/>
          <v-text-field label="Hypothek" type="number" v-model="newPropertyMortgage" prefix="€"
                        :rules="[rules.required,rules.number,rules.negative]"/>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addProperty" color="primary">Hinzufügen</v-btn>
          <v-btn @click="dialog = false" color="error">Abbrechen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'PropertyList',
  data() {
    return {
      state: this.gamestate,
      dialog: false,
      newPropertyName: '',
      newPropertyCashflow: 0,
      newPropertyDeposit: 0,
      newPropertyCost: 0,
      newPropertyMortgage: 0,
      rules: this.rules,
    };
  },
  methods: {
    addProperty() {
      this.state.immobileAndCompanies.push(
        {
          name: this.newPropertyName,
          cashflow: this.newPropertyCashflow,
          deposit: this.newPropertyDeposit,
          cost: this.newPropertyCost,
          mortage: this.newPropertyMortgage
        });
      this.newPropertyName = '';
      this.newPropertyCashflow = 0;
      this.newPropertyDeposit = 0;
      this.newPropertyCost = 0;
      this.newPropertyMortgage = 0;
      this.dialog = false;
    },
    removeProperty(index) {
      this.state.immobileAndCompanies.splice(index, 1);
    },
    propertyToString(property){
      return `${property.name } Cashflow: ${parseFloat(property.cashflow).toFixed(2) } € Anzahlung: ${parseFloat(property.deposit).toFixed(2) } € Kosten: ${parseFloat(property.cost).toFixed(2) } € Hypothek: ${parseFloat(property.mortage).toFixed(2) } €`;
    }
  },
}
</script>
