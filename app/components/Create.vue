<template>
	<Page actionBarHidden="false">
    <ActionBar title="Application Settings" flat="true">
      <GridLayout columns="auto, *">
        <Image row="0" col="0" src="~/assets/images/ic_back.png" width="24" verticalAlignment="center" @tap="$navigateTo(Subjects)" />
        <Label class="title" fontSize="24" text="New subject" row="0" col="1" colSpan="2" />
      </GridLayout>
		</ActionBar>
    <StackLayout>
        <Label text="科目名" />
        <TextField :text="textFieldValue" hint="Enter 科目名..." />
        <Label text="部屋" />
        <TextField :text="textFieldValue" hint="Enter 部屋..." />
        <Label text="講師" />
        <TextField :text="textFieldValue" hint="Enter 講師..." />
    </StackLayout>
	</Page>
</template>
<script>
import Subjects from './Subjects';

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
</style>