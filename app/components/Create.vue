<template>
	<Page actionBarHidden="false">
    <ActionBar title="Application Settings" flat="true">
      <GridLayout columns="30, *, 30 ,20">
        <Image row="0" col="0" src="~/assets/images/ic_back.png" width="24" verticalAlignment="center" @tap="$navigateTo(Subjects)" />
        <Label class="title" fontSize="24" text="New subject" row="0" col="1" />
        <Image ios.position="right" row="0" col="2" src="~/assets/images/ic_save2.png" verticalAlignment="center" />
      </GridLayout>
		</ActionBar>
    <StackLayout>
        <DockLayout stretchLastChild="true" height="15%">
            <Label dock="left" width="100" text="表示例" verticalAlignment="center" />
            <Label class="colorLabel" dock="left" width="5%" :backgroundColor="color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="name" text="アーキテクチャ" />
                <Label textWrap="true" class="room" text="3105" />
            </StackLayout>
        </DockLayout>
        <DockLayout stretchLastChild="true">
          <Label text="ラベルカラー" dock="left" width="100" verticalAlignment="center" />
            <WrapLayout >
              <Label class="colorLabel" width="21" height="21" backgroundColor="#ff1744" @tap="selectColor('#ff1744')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#F50057" @tap="selectColor('#F50057')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#D500F9" @tap="selectColor('#D500F9')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#651FFF" @tap="selectColor('#651FFF')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#3D5AFE" @tap="selectColor('#3D5AFE')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#2979FF" @tap="selectColor('#2979FF')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#00B0FF" @tap="selectColor('#00B0FF')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#00E5FF" @tap="selectColor('#00E5FF')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#1DE9B6" @tap="selectColor('#1DE9B6')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#00E676" @tap="selectColor('#00E676')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#76FF03" @tap="selectColor('#76FF03')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#C6FF00" @tap="selectColor('#C6FF00')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#FFEA00" @tap="selectColor('#FFEA00')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#FFC400" @tap="selectColor('#FFC400')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#FF9100" @tap="selectColor('#FF9100')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#FF3D00" @tap="selectColor('#FF3D00')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#DDDDDD" @tap="selectColor('#DDDDDD')"/>
              <Label class="colorLabel" width="21" height="21" backgroundColor="#000000" @tap="selectColor('#000000')"/>
            </WrapLayout >
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="科目名" dock="left" width="100"  verticalAlignment="center" />
          <TextField :text="name" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="教室" dock="left" width="100" verticalAlignment="center" />
          <TextField :text="room" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="教員" dock="left" width="100" verticalAlignment="center"  />
          <TextField :text="teacher" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="休める回数" dock="left" width="100" verticalAlignment="center"  />
          <TextField :text="absentCount" keyboardType="number" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="補足" dock="left" width="100" verticalAlignment="center"  />
          <TextView  :text="memo" />
        </DockLayout>
    </StackLayout>
	</Page>
</template>
<script>
import Subjects from './Subjects';

export default {
  data() {
    return {
      Subjects: Subjects,
      slctColor: true,
      myCheckedProp: false,
      name: '',
      room: '',
      color: '#DDDDDD',
      teacher: '',
      absentCount: '',
      memo: ''
    };
  },
  methods: {
    selectColor(color) {
      this.color = color;
    }
  },
  components: {
    Subjects
  }
};
</script>
<style scoped>
ActionBar {
  background-color: white;
  color: #5c687c;
}
.title {
  text-align: center;
}
DockLayout {
  padding: 10 40;
}
.colorLabel {
  margin: 6;
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