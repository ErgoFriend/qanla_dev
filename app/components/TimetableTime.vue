<template>
    <!-- <StackLayout dock="left" width="10%">
        <StackLayout class="times" height="17%">
            <Label :text="time.one.start" />
            <Label :text="time.one.id" />
            <Label :text="time.one.end" />
        </StackLayout>
        <StackLayout class="times" height="17%"> 
            <Label :text="time.two.start" />
            <Label :text="time.two.id" />
            <Label :text="time.two.end" />
        </StackLayout>
        <StackLayout class="times" height="17%">
            <Label :text="time.three.start" />
            <Label :text="time.three.id" />
            <Label :text="time.three.end" />
        </StackLayout>
        <StackLayout class="times" height="17%">
            <Label :text="time.four.start" />
            <Label :text="time.four.id" />
            <Label :text="time.four.end" />
        </StackLayout>
        <StackLayout class="times" height="17%">
            <Label :text="time.five.start" />
            <Label :text="time.five.id" />
            <Label :text="time.five.end" />
        </StackLayout>
        <StackLayout class="times" height="17%">
            <Label :text="time.six.start" />
            <Label :text="time.six.id" />
            <Label :text="time.six.end" />
        </StackLayout>
    </StackLayout> -->
    <ListView for="item in time">
        <v-template>
            <StackLayout class="times" height="17%">
                <Label :text="item.start" />
                <Label :text="item.id" />
                <Label :text="item.end" />
            </StackLayout>
        </v-template>
    </ListView>
</template>
<script>
export default {
  computed: {
    time() {
      const timetable = this.$store.getters.timetable;
      return timetable.time;
    }
  }
};
</script>
<style scoped>
.times {
  text-align: center;
  vertical-align: center;
}
</style>