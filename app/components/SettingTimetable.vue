<template>
    <StackLayout>
        <Checkbox v-model="chkbox" @tap="onTap($event)"></Checkbox>
        <Switch v-model="itemEnabled" />
    </StackLayout>
</template>
