<template>
  <v-row>
    <h1>Akiten/Fonds/CDs</h1>
  </v-row>
  <v-row>
    <v-list width="100%">
      <v-list-item v-for="(stock, index) in state.stocks" :key="index" :value="stock">
        <v-list-item-title>{{ stockToString(stock) }}
        </v-list-item-title>
        <template v-slot:append>
          <v-btn
            color="error"
            icon="mdi-close"
            variant="text"
            @click="removeStock"
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
        <v-card-title>Akiten/Fonds/CDs</v-card-title>
        <v-card-text>
          <v-text-field label="Name" v-model="newStockName" :rules="[rules.required]"/>
          <v-text-field label="Anzahl der Anzeile" type="number" v-model="newStockAmount"
                        :rules="[rules.required,rules.number,rules.negative]"/>
          <v-text-field label="Kosten je Anteil" type="number" v-model="newStockValue" prefix="€"
                        :rules="[rules.required,rules.number,rules.negative]"/>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addStock" color="primary">Hinzufügen</v-btn>
          <v-btn @click="dialog = false" color="error">Abbrechen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'StockList',
  data() {
    return {
      newStockName: '',
      newStockAmount: 0,
      newStockValue: 0,
      state: this.gamestate,
      dialog: false,
      rules: this.rules,
    };
  },
  methods: {
    addStock() {
      this.state.stocks.push({
        name: this.newStockName,
        amount: this.newStockAmount,
        value: this.newStockValue,
      });
      this.newStockName = '';
      this.newStockAmount = 0;
      this.newStockValue = 0;
      this.dialog = false;
    },
    removeStock(index) {
      this.state.stocks.splice(index, 1);
    },
    stockToString(stock) {
      return `${stock.name} ${stock.amount} x ${parseFloat(stock.value).toFixed(2)} €`;
    }
  },
}
</script>
