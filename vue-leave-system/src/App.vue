<template>
    <div id="app">
        <router-link to="/home">home</router-link>&nbsp
        <router-link to="/profile">profile</router-link>&nbsp
        <router-link to="/leaveApply">leaveApply</router-link>&nbsp
        <router-link to="/leaveAprv">leaveAprv</router-link>&nbsp
        <router-link to="/leaveHistory">leaveHistory</router-link>&nbsp
        <router-link to="/myLeaveHistory">myLeaveHistory</router-link>&nbsp
        <router-link to="/orgStruct">orgStruct</router-link>&nbsp
        <router-view></router-view>
    </div>
</template>

<script>
    import home           from './components/Home.vue';
    import profile        from './components/profile-component.vue';
    import leaveApply     from './components/leave-apply-component.vue';
    import leaveAprv      from './components/leave-aprv-component.vue';
    import leaveHistory   from './components/leave-history-component.vue';
    import myLeaveHistory from './components/my-leave-history-component.vue';
    import orgStruct      from './components/organization-structure-component.vue';

    export default {
        name: 'app',
        components: {
            home,
            profile,
            leaveApply,
            leaveAprv,
            leaveHistory,
            myLeaveHistory,
            orgStruct
        }
    };
</script>

<style>

</style>
