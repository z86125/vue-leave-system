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
import notfound       from './components/notfound.vue';
Vue.use(VueRouter); 

// windows驗證後，取得的userData，win驗證與資料取得方法之後再研究
var userData = {
    userId: '287',
    userName: 'Tony',
    userDept: 'PS'
};

export default new VueRouter({
    mode: 'history',
    base: '/VuePage/',
    routes: [
        // 未指定任何路由的預設頁面
        {
            path: '*',
            component: notfound
        },
        {
            path: '',
            component: home,
            props: { userData: userData }
        },
        {
            path: '/home',
            component: home,
            props: { userData: userData }
        },
        {
            path: '/profile',
            component: profile,
            props: { userData: userData }
        },
        {
            path: '/leaveApply',
            component: leaveApply,
            props: { userData: userData }
        },
        {
            path: '/leaveAprv',
            component: leaveAprv,
            props: { userData: userData }
        },
        {
            path: '/leaveHistory',
            component: leaveHistory,
            props: { userData: userData }
        },
        {
            path: '/myLeaveHistory',
            component: myLeaveHistory,
            props: { userData: userData }
        },
        {
            path: '/orgStruct',
            component: orgStruct,
            props: { userData: userData }
        }
    ]
});