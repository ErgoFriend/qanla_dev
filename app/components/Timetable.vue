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
         <StackLayout dock="left" width="10%">
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
    </StackLayout>
         <StackLayout dock="left" orientation="horizontal" >
            <Day :day="week.mon" />
            <Day :day="week.tue" />
            <Day :day="week.wed" />
            <Day :day="week.thu" />
            <Day :day="week.fri" />
            <Day :day="week.sat" />
        </StackLayout>
     </DockLayout>
</template>
<script>
import Day from './Day';
export default {
  components: {
    Day
  },
  data: function() {
    return {
      time: {
        one: { id: 1, start: '09:00', end: '10:30' },
        two: { id: 2, start: '10:45', end: '12:10' },
        three: { id: 3, start: '13:00', end: '14:30' },
        four: { id: 4, start: '14:45', end: '16:15' },
        five: { id: 5, start: '16:30', end: '18:00' },
        six: { id: 6, start: '18:15', end: '19:45' }
      },
      week: {
        mon: {
          one: { title: '', room: '', color: '#DDDDDD' },
          two: { title: '', room: '', color: '#DDDDDD' },
          three: { title: '哲学概論', room: '講義室', color: '#00C23F' },
          four: { title: '', room: '', color: '#DDDDDD' },
          five: { title: 'デザイン演習', room: '講義室', color: '#FF9238' },
          six: { title: '', room: '', color: '#DDDDDD' }
        },
        tue: {
          one: { title: '', room: '', color: '#DDDDDD' },
          two: { title: '', room: '', color: '#DDDDDD' },
          three: {
            title: 'コンピュータ・ネットワーク',
            room: '3205',
            color: '#52C2FF'
          },
          four: { title: '演習2B', room: '3101', color: '#52C2FF' },
          five: { title: '', room: '', color: '#DDDDDD' },
          six: { title: '', room: '', color: '#DDDDDD' }
        },
        wed: {
          one: { title: '', room: '', color: '#DDDDDD' },
          two: { title: '', room: '', color: '#DDDDDD' },
          three: { title: '', room: '', color: '#DDDDDD' },
          four: { title: '', room: '', color: '#DDDDDD' },
          five: { title: '', room: '', color: '#DDDDDD' },
          six: { title: '', room: '', color: '#DDDDDD' }
        },
        thu: {
          one: { title: '', room: '', color: '#DDDDDD' },
          two: { title: '', room: '', color: '#DDDDDD' },
          three: { title: '', room: '', color: '#DDDDDD' },
          four: {
            title: 'オペレーティングシステム',
            room: '4205',
            color: '#52C2FF'
          },
          five: { title: '演習1B', room: '3201', color: '#DDDDDD' },
          six: { title: '', room: '', color: '#DDDDDD' }
        },
        fri: {
          one: { title: '', room: '', color: '#DDDDDD' },
          two: { title: '', room: '', color: '#DDDDDD' },
          three: {
            title: 'アルゴリズムとデータ構造',
            room: '3205',
            color: '#52C2FF'
          },
          four: { title: '', room: '', color: '#DDDDDD' },
          five: { title: '実習2B', room: '4105', color: '#52C2FF' },
          six: { title: '', room: '', color: '#DDDDDD' }
        },
        sat: {
          one: { title: '', room: '', color: '#DDDDDD' },
          two: { title: '', room: '', color: '#DDDDDD' },
          three: { title: '', room: '', color: '#DDDDDD' },
          four: { title: '', room: '', color: '#DDDDDD' },
          five: { title: '', room: '', color: '#DDDDDD' },
          six: { title: '', room: '', color: '#DDDDDD' }
        }
      }
    };
  }
};
</script>
 <style scoped>
.timetable_top {
  background-color: #5c687c;
  color: white;
  text-align: center;
}
.timetable_top_sat {
  background-color: #4F5A99;
}

.times {
  text-align: center;
  vertical-align: center;
}
</style> 