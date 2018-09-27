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
          <Label text="科目名" dock="left" width="60" />
          <TextField :text="textFieldValue" />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="部屋" dock="left" width="60" />
          <TextField :text="textFieldValue"  />
        </DockLayout>
        <DockLayout stretchLastChild="true" >
          <Label text="講師" dock="left" width="60" />
          <TextField :text="textFieldValue"  />
        </DockLayout>
    </StackLayout>
	</Page>
</template>
<script>
import Subjects from "./Subjects";

export default {
  data() {
    return {
      Subjects: Subjects
    };
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
  padding: 20;
}
</style>