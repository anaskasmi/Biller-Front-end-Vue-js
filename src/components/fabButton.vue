<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab dark large :color="color" v-bind="attrs" v-on="on">
          <v-icon dark> {{ icon }} </v-icon>
        </v-btn>
      </template>
      <span>{{ text }}</span>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  props: ["color", "icon", "text"],
};
</script>
<style scoped>
</style>
