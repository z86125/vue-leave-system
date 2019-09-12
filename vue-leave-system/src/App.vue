<template>
    <div id="app">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="primary">
                <b-navbar-brand><router-link to="/home"><span style="color: white">請假系統</span></router-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item><router-link to="/profile"><span style="color: white">我的基本資料</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/myLeaveHistory"><span style="color: white">我的請假紀錄</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/leaveApply"><span style="color: white">請假申請</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/leaveAprv"><span style="color: white">請假待覆核</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/leaveHistory"><span style="color: white">請假紀錄</span></router-link></b-nav-item>
                        <b-nav-item><router-link to="/orgStruct"><span style="color: white">組織架構圖</span></router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
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
    .navbar-text {
        color: white;
    }
    .v-align {
        display: flex;
        align-items: center;
    }
    .h-align {
        text-align: center;
    }
</style>
