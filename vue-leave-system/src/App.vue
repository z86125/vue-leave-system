<template>
    <!-- App組件除了顯示navbar之外，其他頁面也是App的子組件 -->
    <div id="app">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="primary" class="app-navbar-text">
                <b-navbar-brand to="/home">請假系統</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <!-- 其他頁面組件的路由 -->
                        <!--
                        <b-nav-item v-on:click="NavbarClick"><router-link to="/profile"><span>我的基本資料</span></router-link></b-nav-item>
                        <b-nav-item v-on:click="NavbarClick"><router-link to="/myLeaveHistory"><span>我的請假紀錄</span></router-link></b-nav-item>
                        -->
                        <b-nav-item to="/leaveApply">請假申請</b-nav-item>
                        <b-nav-item to="/leaveAprv">請假待覆核</b-nav-item>
                        <b-nav-item to="/leaveHistory">請假紀錄</b-nav-item>
                        <b-nav-item to="/orgStruct">組織架構圖</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="Profile" right>
                            <b-dropdown-item to="/profile">基本資料</b-dropdown-item>
                            <b-dropdown-item to="/myLeaveHistory">請假紀錄</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <!--選定的路由將會渲染在router-view中-->
        <router-view></router-view>
    </div>
</template>

<script>
    //引入會用到的路由
    import home           from './components/Home.vue';
    import profile        from './components/profile-component.vue';
    import leaveApply     from './components/leave-apply-component.vue';
    import leaveAprv      from './components/leave-aprv-component.vue';
    import leaveHistory   from './components/leave-history-component.vue';
    import myLeaveHistory from './components/my-leave-history-component.vue';
    import orgStruct      from './components/organization-structure-component.vue';

    export default {
        name: 'app',
        data: function () {
            return {
                lastEvent: null
            }
        },
        methods: {
            NavbarClick: function (event) {
                if (this.lastEvent) {
                    this.lastEvent.classList.remove('app-navbar-click');
                }
                event.target.classList.add('app-navbar-click');
                this.lastEvent = event.target;
            }
        },
        //將引入的組件定義進vue實例中
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
    /*自訂義全域css，其他.vue檔內的style scoped只在該組件內有效*/
    .app-navbar-text span {
        color: white;
        font-family: Microsoft JhengHei;
    }
    .app-table {
        background-color: #FFFFFF;
    }
        .app-table > thead > tr {
            background-color: #5C5C5C;
            color: #FFFFFF;
        }
    .app-navbar-click {
        /*font-size: large;*/
        font-weight: bold;
    }
    .v-align {
        display: flex;
        align-items: center;
    }
    .h-align {
        text-align: center;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    /*進場動畫 name=fade*/
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .8s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    /*從下面飛進的進場動畫*/
    @keyframes fly-in {

        0% {
            top: 100%;
        }

        100% {
            top: 60px;
        }
    }

    .fly-animation {
        width: 100%;
        position: absolute;
        animation-name: fly-in;
        animation-duration: .5s;
    }
</style>
