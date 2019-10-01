<template>
    <div class="my-leave-history">
        <transition name="fade">
            <div v-show="show">
                <b-container style="padding-top: 30px;">
                    <b-row v-if="deleteList.length > 0">
                        <b-col cols="12" align="right" style="padding-bottom: 15px">
                            <button type="button" class="btn btn-danger" v-on:click="DeleteClick">刪除</button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="h-align" cols="12">
                            <table class="table table-bordered table-hover shadow app-table">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>日期</td>
                                        <td>時數</td>
                                        <td>請假類別</td>
                                        <td>請假事由</td>
                                        <td>申請時間</td>
                                        <td>覆核狀態</td>
                                        <td>覆核人員</td>
                                        <td>覆核時間</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- 現在使用v-for時，需要多定義一個:key值，否則編譯完會有warning -->
                                    <tr v-for="data in leaveList" :key="data.id">
                                        <td><input type="checkbox" v-bind:value="data.id" v-model="deleteList"/></td>
                                        <td>{{ data.Data_Dt }}</td>
                                        <td>{{ data.Hours }}</td>
                                        <td>{{ data.Leave_Typ }}</td>
                                        <td>{{ data.Leave_Desc }}</td>
                                        <td>{{ data.Apply_Dt }}</td>
                                        <td>{{ data.Aprv_Result }}</td>
                                        <td>{{ data.Aprv_Person }}</td>
                                        <td>{{ data.Aprv_Dt }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </transition>
    </div>
</template>

<script>

    var listData = [
        {
            id: 1,
            Data_Dt: '2019/01/01',
            Hours: 8,
            Leave_Typ: '事假',
            Leave_Desc: '出國旅遊',
            Apply_Dt: '2018/01/01',
            Aprv_Result: '通過',
            Aprv_Person: 'John',
            Aprv_Dt: '2018/01/05'
        }, {
            id: 2,
            Data_Dt: '2019/01/02',
            Hours: 8,
            Leave_Typ: '病假',
            Leave_Desc: '頭痛',
            Apply_Dt: '2018/01/01',
            Aprv_Result: '退回',
            Aprv_Person: 'John',
            Aprv_Dt: '2018/01/05'
        }, {
            id: 3,
            Data_Dt: '2019/01/03',
            Hours: 8,
            Leave_Typ: '特休',
            Leave_Desc: 'null',
            Apply_Dt: '2018/01/01',
            Aprv_Result: '通過',
            Aprv_Person: 'John',
            Aprv_Dt: '2018/01/05'
        },
    ];

    export default {
        name: 'my-leave-history',
        props: {
        },
        data: function () {
            return {
                deleteList: [],
                leaveList: listData,
                show: false
            }
        },
        mounted: function () {
            this.show = true;
        },
        methods: {
            DeleteClick: function () {
                alert(this.deleteList);
            }
        }
    };
</script>

<style scoped>
</style>