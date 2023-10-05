<template>
  <v-app>
    <v-container>
      <v-row>
          <v-text-field label="Gehalt" v-model="state.income" type="number" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
      </v-row>
      <v-row>
          <v-text-field label="Zinsen/Dividenden" v-model="state.interest" type="number" prefix="€" :rules="[rules.number,rules.negative]"/>
      </v-row>
      <v-row>
        <h1>Immobilien/Unternehmen</h1>
      </v-row>
      <v-row>
        <v-list width="100%">
          <v-list-item v-for="(property, index) in state.immobileAndCompanies" :key="index" :value="property" >
            <v-list-item-title v-text="property.name"/>
            <v-list-item-subtitle v-text="property.value"/>
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
          <v-dialog v-model="dialog" max-width="400px">
            <template v-slot:activator="{ on }">
              <v-btn @click="dialog = !dialog" color="primary">Hinzufügen</v-btn>
            </template>
            <v-card>
              <v-card-title>Neue Immobilie/Unternehmen</v-card-title>
              <v-card-text>
                <v-text-field label="Name" v-model="newPropertyName" :rules="[rules.required]"/>
                <v-text-field label="Cashflow" type="number" v-model="newPropertyValue" prefix="€" :rules="[rules.required,rules.number,rules.negative]"/>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="addProperty" color="primary">Hinzufügen</v-btn>
                <v-btn @click="dialog = false" color="error">Abbrechen</v-btn>
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
      dialog: false,
      newPropertyName: '',
      newPropertyValue: '0,00',
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
        value: this.newPropertyValue
      });
      this.newPropertyName = '';
      this.newPropertyValue = 0;
      this.dialog = false;
    },
    removeProperty(index) {
      this.state.immobileAndCompanies.splice(index, 1);
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
