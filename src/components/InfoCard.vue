<template>
  <v-card variant="tonal" width="100%" class="mx-auto ma-2">
    <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{ title }}</v-card-title>
    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
