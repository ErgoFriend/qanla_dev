<template>
    <ListView for="id in classList" width="16.68%">
        <v-template>
            <Classes :id="id" />
        </v-template>
    </ListView>
    <!-- <StackLayout width="16.68%">                 
        <DockLayout stretchLastChild="true" height="16.68%">
            <Label dock="left" width="4%" class="color_label" :backgroundColor="day.one.color"/>
            <StackLayout  class="classes">
                <Label textWrap="true" class="title" fontWeight="bold" :text="day.one.title"/>
                <Label textWrap="true" class="room" :text="day.one.room" />
            </StackLayout >
        </DockLayout>
        <DockLayout stretchLastChild="true" height="16.68%">
            <Label dock="left" width="4%" class="color_label" :backgroundColor="day.two.color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="title" fontWeight="bold" :text="day.two.title" />
                <Label textWrap="true" :text="day.two.room" />
            </StackLayout>
        </DockLayout>
        <DockLayout stretchLastChild="true" height="16.68%">
            <Label dock="left" width="4%" class="color_label" :backgroundColor="day.three.color"/>
            <StackLayout class="classes" @tap="onItemTap(day.three)">
                <Label textWrap="true" class="title" fontWeight="bold" :text="day.three.title"  @itemTap="edit"/>
                <Label textWrap="true" class="room" :text="day.three.room" />
            </StackLayout>
        </DockLayout>
        <DockLayout stretchLastChild="true" height="16.68%">
            <Label dock="left" width="4%" class="color_label" :backgroundColor="day.four.color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="title" fontWeight="bold" :text="day.four.title" />
                <Label textWrap="true" class="room" :text="day.four.room" />
            </StackLayout>
        </DockLayout>
        <DockLayout stretchLastChild="true" height="16.68%">
            <Label dock="left" width="4%" class="color_label" :backgroundColor="day.five.color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="title" fontWeight="bold" :text="day.five.title" />
                <Label textWrap="true" class="room" :text="day.five.room" />
            </StackLayout>
        </DockLayout>
        <DockLayout stretchLastChild="true" height="16.68%">
            <Label dock="left" width="4%" class="color_label" :backgroundColor="day.six.color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="title" fontWeight="bold" :text="day.six.title" />
                <Label textWrap="true" class="room" :text="day.six.room" />
            </StackLayout>
        </DockLayout>
    </StackLayout> -->
</template>

<script>
import Classes from "./Classes";

export default {
  components: [Classes],
  props: ["day"],
  methods: {
    classList() {
      const thisDay = this.$store.getters.timetable;
      return thisDay.day;
    }
  }
};
</script>
<style scoped>
.color_label {
  border-radius: 50px;
  margin: 2% 0;
}
.classes {
  text-align: center;
  vertical-align: center;
}
.title {
  font-size: 13%;
}
.room {
  font-size: 11%;
}
</style>

