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
          <TextField :text="textFieldValue" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="教室" dock="left" width="100" verticalAlignment="center" />
          <TextField :text="textFieldValue" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="教員" dock="left" width="100" verticalAlignment="center"  />
          <TextField :text="textFieldValue" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="休める回数" dock="left" width="100" verticalAlignment="center"  />
          <TextField :text="textFieldValue" keyboardType="number" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="補足" dock="left" width="100" verticalAlignment="center"  />
          <TextView  :text="textFieldValue" />
        </DockLayout>
        <DockLayout stretchLastChild="true">
          <Label text="ラベルカラー" dock="left" width="100" verticalAlignment="center"  />
          <WrapLayout  v-for="color in colorList" :key="color">
        
            <CheckBox :fillColor="color" :value="color" @tap="onItemTap"/>
          </WrapLayout >
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
      colorList: [
        '#DDDDDD',
        '#00caab',
        '#3d5afe',
        '#795548',
        '#006968',
        '#5c687c',
        '#8130ff',
        '#ffea00',
        '#aee406',
        '#f57c00',
        '#ff1744',
        '#30bcff'
      ]
    };
  },
  methods: {
    onItemTap(event) {
      alert(event.toString());
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
</style>