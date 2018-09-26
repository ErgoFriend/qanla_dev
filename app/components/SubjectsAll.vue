<template>
  <ListView for="item in subjects" @itemTap="onItemTap(item)">
    <v-template>
      <!-- Shows the list item label in the default color and style. -->
      <Label :text="item.name" />
    </v-template>
  </ListView>
</template>
<script>
export default {
  computed: {
    timetable() {
      return this.$store.getters.timetable;
    },
    subjects() {
      return this.$store.getters.subjects;
    }
  },
  methods: {
    onItemTap(id) {}
  }
};
</script>
