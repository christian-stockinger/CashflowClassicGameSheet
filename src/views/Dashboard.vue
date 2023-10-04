<template>
  <v-container fluid>
    <v-row>
      <v-text-field label="Beruf" v-model="job"></v-text-field>
    </v-row>
    <v-row>
      <v-text-field label="Traum" v-model="dream"></v-text-field>
    </v-row>
    <v-row>
      <v-text-field label="Auditor" v-model="auditor"></v-text-field>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="ma-2">
        <v-row>
          <InfoCard title="Monatlicher Cashflow" :text="state.GetCashflow + ' €'"/>
        </v-row>
        <v-row>
          <InfoCard title="Kontostand" :text="state.balance + ' €'"/>
        </v-row>
      </v-col>

      <v-col class="ma-2">
        <v-row>
          <InfoCard title="Gehalt" :text="state.balance + ' €'"/>
        </v-row>
        <v-row>
          <InfoCard title="Passives Einkommen" :text="state.passivesEinkommen + ' €'"/>
        </v-row>
        <v-row>
          <InfoCard title="Gesamte Ausgaben" :text="state.gesammteAusgaben + ' €'"/>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-btn
        block
        class="text-none"
        color="grey-lighten-3"
        size="x-large"
        variant="flat"
        @click="state.CalculatePayday()"
      >
        Zahltag
      </v-btn>
    </v-row>

  </v-container>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  components: {InfoCard},
  data() {
    return {
      state: this.gamestate,
      job: "",
      dream: "",
      auditor: "",
    };
  }
};
</script>
