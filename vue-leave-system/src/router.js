// 路由定義頁
import Vue from 'vue';
import VueRouter from 'vue-router'
// router-component
import home           from './components/Home.vue';
import profile        from './components/profile-component.vue';
import leaveApply     from './components/leave-apply-component.vue';
import leaveAprv      from './components/leave-aprv-component.vue';
import leaveHistory   from './components/leave-history-component.vue';
import myLeaveHistory from './components/my-leave-history-component.vue';
import orgStruct      from './components/organization-structure-component.vue';
//

Vue.use(VueRouter); 

export default new VueRouter({
    routes: [
        // 未指定任何路由的預設頁面
        {
            path: '',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/profile',
            component: profile
        },
        {
            path: '/leaveApply',
            component: leaveApply
        },
        {
            path: '/leaveAprv',
            component: leaveAprv
        },
        {
            path: '/leaveHistory',
            component: leaveHistory
        },
        {
            path: '/myLeaveHistory',
            component: myLeaveHistory
        },
        {
            path: '/orgStruct',
            component: orgStruct
        }
    ]
});