<template>
    <DockLayout stretchLastChild="true">
        <StackLayout dock="top" orientation="horizontal" height="7%">
            <Label class="timetable_top" text="" width="10%"/>
            <Label class="timetable_top" text="Mon" width="15%"/>
            <Label class="timetable_top" text="Tue" width="15%"/>
            <Label class="timetable_top" text="Wed" width="15%"/>
            <Label class="timetable_top" text="Thu" width="15%"/>
            <Label class="timetable_top" text="Fri" width="15%"/>
            <Label class="timetable_top timetable_top_sat" text="Sat" width="15%"/>
        </StackLayout>


        <TimetableTime />

        <StackLayout dock="left" orientation="horizontal" >
            <!-- <Day :day="mon" />
            <Day :day="tue" />
            <Day :day="wed" />
            <Day :day="thu" />
            <Day :day="fri" />
            <Day :day="sat" /> -->
        </StackLayout>

    </DockLayout>
</template>
<script>
import TimetableTime from "./TimetableTime";
import Day from "./Day";

export default {
  components: {
    TimetableTime,
    Day
  }
};
</script>

<style scoped>
.timetable_top {
  background-color: rgb(112, 112, 112);
  color: white;
  padding-top: 10%;
  padding-left: 20%;
}
.timetable_top_sat {
  background-color: rgb(79, 90, 153);
}
.timetable_time {
  height: 15%;
  padding-top: 30%;
  padding-left: 15%;
  font-size: 15%;
  border-right: solid 3px #9b9b9b;
}
</style>