<template>
	<Page actionBarHidden="false">
    <ActionBar title="Application Settings" flat="true">
      <GridLayout columns="auto, *">
        <Image row="0" col="0" src="~/assets/images/ic_back.png" width="24" verticalAlignment="center" @tap="$navigateTo(Subjects)" />
        <Label class="title" fontSize="24" text="New subject" row="0" col="1" colSpan="2" />
      </GridLayout>
		</ActionBar>
    <StackLayout>
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
        <DockLayout stretchLastChild="true" height="17%">
            <Label dock="left" width="100" text="サンプル" verticalAlignment="center" />
            <Label class="colorLabel" dock="left" width="5%" :backgroundColor="color"/>
            <StackLayout class="classes">
                <Label textWrap="true" class="name" text="アーキテクチャ" />
                <Label textWrap="true" class="room" text="3105" />
            </StackLayout>
        </DockLayout>
        <DockLayout stretchLastChild="true">
          <Label text="ラベルカラー" dock="left" width="100" verticalAlignment="center" />
          <WrapLayout >
            <Label class="colorLabel" width="20" height="20" backgroundColor="#DDDDDD" @tap="selectColor('#DDDDDD')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#00caab" @tap="selectColor('#00caab')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#3d5afe" @tap="selectColor('#3d5afe')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#795548" @tap="selectColor('#795548')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#006968" @tap="selectColor('#006968')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#5c687c" @tap="selectColor('#5c687c')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#8120ff" @tap="selectColor('#8120ff')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#ffea00" @tap="selectColor('#ffea00')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#aee406" @tap="selectColor('#aee406')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#f57c00" @tap="selectColor('#f57c00')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#ff1744" @tap="selectColor('#ff1744')"/>
            <Label class="colorLabel" width="20" height="20" backgroundColor="#30bcff" @tap="selectColor('#30bcff')"/>
          </WrapLayout >
        </DockLayout>
    </StackLayout>
	</Page>
</template>
<script>
import Subjects from "./Subjects";

export default {
  data() {
    return {
      Subjects: Subjects,
      slctColor: true,
      myCheckedProp: false,
      name: "",
      room: "",
      color: "#30bcff",
      teacher: "",
      absentCount: "",
      memo: ""
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
  padding-right: 30;
}
DockLayout {
  padding: 10 40;
}
.colorLabel {
  margin: 5;
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