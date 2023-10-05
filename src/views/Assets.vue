<template>
  <v-app>
    <v-container>
      <v-row>
        <v-text-field label="Ersparnisse" v-model="state.savings" type="number" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <v-text-field label="Edelmetalle etc." v-model="state.metal" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>

      <v-row>
        <h1>Akiten/Fonds/CDs</h1>
      </v-row>
      <v-row>
        <v-list width="100%">
          <v-list-item v-for="(stock, index) in state.stocks" :key="index" :value="stock" >
            <v-list-item-title>{{ stock.name }} {{ stock.amount }} x {{ parseFloat(stock.value).toFixed(2) }} €</v-list-item-title>
            <template v-slot:append>
              <v-btn
                color="error"
                icon="mdi-close"
                variant="text"
                @click="removeStock(index)"
              />
            </template>
          </v-list-item>
        </v-list>
      </v-row>
      <v-row>
        <v-dialog v-model="dialogStocks" max-width="400px">
          <template v-slot:activator="{ on }">
            <v-btn @click="dialogStocks = !dialogStocks" color="primary">Hinzufügen</v-btn>
          </template>
          <v-card>
            <v-card-title>Akiten/Fonds/CDs</v-card-title>
            <v-card-text>
              <v-text-field label="Name" v-model="newStockName" :rules="[rules.required]"/>
              <v-text-field label="Anzahl der Anzeile" type="number" v-model="newStockAmount" :rules="[rules.required,rules.number,rules.negative]"/>
              <v-text-field label="Kosten je Anteil" type="number" v-model="newStockValue" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="addStock" color="primary">Hinzufügen</v-btn>
              <v-btn @click="dialogStocks = false" color="error">Abbrechen</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row>
        <h1>Immobilien/Unternehmen</h1>
      </v-row>
      <v-row>
        <v-list width="100%">
          <v-list-item v-for="(property, index) in state.immobileAndCompanies" :key="index" :value="property" >
            <v-list-item-title>{{ property.name }} {{ parseFloat(property.cashflow).toFixed(2) }} €</v-list-item-title>
            <template v-slot:append>
              <v-btn
                color="error"
                icon="mdi-close"
                variant="text"
                @click="removeProperty(index)"
              />
            </template>
          </v-list-item>
        </v-list>
      </v-row>
      <v-row>
        <v-dialog v-model="dialogProperty" max-width="400px">
          <template v-slot:activator="{ on }">
            <v-btn @click="dialogProperty = !dialogProperty" color="primary">Hinzufügen</v-btn>
          </template>
          <v-card>
            <v-card-title>Neue Immobilie/Unternehmen</v-card-title>
            <v-card-text>
              <v-text-field label="Name" v-model="newPropertyName" :rules="[rules.required]"/>
              <v-text-field label="Cashflow" type="number" v-model="newPropertyCashflow" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
              <v-text-field label="Anzahlung" type="number" v-model="newPropertyDeposit" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
              <v-text-field label="Kosten" type="number" v-model="newPropertyCost" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
              <v-text-field label="Hypothek" type="number" v-model="newPropertyMortgage" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="addProperty" color="primary">Hinzufügen</v-btn>
              <v-btn @click="dialogProperty = false" color="error">Abbrechen</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      state: this.gamestate,
      dialogStocks: false,
      dialogProperty: false,
      newStockName: '',
      newStockAmount: 0,
      newStockValue: 0,
      newPropertyName: '',
      newPropertyCashflow: 0,
      newPropertyDeposit: 0,
      newPropertyCost: 0,
      newPropertyMortgage: 0,
      rules: {
        required: value => !!value || 'Required.',
        number: value => !isNaN(value) || 'Zahl eingeben',
        negative: value => Number(value) >= 0 || 'Zahl muss positiv sein',
      }
    };
  },
  methods: {
    addProperty() {
      this.state.immobileAndCompanies.push({
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
      this.dialogProperty = false;
    },
    removeProperty(index) {
      this.state.immobileAndCompanies.splice(index, 1);
    },
    addStock() {
      this.state.stocks.push({
        name: this.newStockName,
        amount: this.newStockAmount,
        value: this.newStockValue,
      });
      this.newStockName = '';
      this.newStockAmount = 0;
      this.newStockValue = 0;
      this.dialogStocks = false;
    },
    removeStock(index) {
      this.state.stocks.splice(index, 1);
    },
  },
};
</script>
